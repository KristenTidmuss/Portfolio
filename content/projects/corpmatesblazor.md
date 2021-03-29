---
author: "Kristen Tidmuss"
title: "CorpMates - Blazor"
date: "2021-03-25"
description: "Upgrading the corp mates app to run on Blazor"
tags: ["EvE Online", "C#", "Blazor"]
draft: false
hideMeta: false
ShowToc: true
cover:
    image: "<img>" # image path/url
    alt: "<alt text>" # alt text
    relative: false # when using page bundles set this to true
    hidden: true # only hide on current single page
---
[![GitHub](/images/github.png)](https://github.com/KristenTidmuss/CorpMates)

# Intro
Ah Shit, Here We Go Again. Back at it with the same project but a new framework. After initial testing on MVC I notice the server CPU demand was quite high during processing due to the amount of API calls needed. Due to this I decided to try my hand writing a Blazor WebAssembly app and transfer the workload onto the users browser, this also has the benefit of API requests coming directly from them meaning my server would never need to ping them itself.

# The Migration
Migrating the code across was surprisingly easy. As I was not making use of any local resources or database connections I was able to copy and paste most of it directly into a .razor page's code block. The only exceptions to this was parallel loops and http calls.

## Parallelization woes
Im going to cut this short, I removed the parallel processing functionality but for good reason. I did not run into any major issues using a parallel for loop, however I discovered under Blazor the benefits of this were negligible as the main bottle neck was the API itself and there was no point expending extra CPU cycles for little to no return.

## HTTP calls
Http call code also had to be completely change, luckily in Blazor it is relatively easy to implement compared to MVC. All you need to do is initialize the client and make the calls straight into an object. See example below on getting a characters corp history from their ID.
```c#
@code
{
    static HttpClient httpClient = new();
    var corpHistoryJson = await httpClient.GetFromJsonAsync<List<ESICorpHistory>>("https://esi.evetech.net/latest/characters/" + charID + "/corporationhistory/?datasource=tranquility");
}
```
With the API requests themselves I faced one major issue... EvE's API loves to timeout and throw error code 500's out of the blue. To deal with this I pulled sneaky one and just threw in a while loop that removed characters from the string list they are stored in once they were successful. This will mean any errors will simply cause the app to try processing that user again.
```c#
//Process Character List
var pastedCharacters = new List<Character>();
while (charList.Any())
{
    try
    {
        var charName = charList[0];
        var character = new Character {charName = charName };
        await character.GetCharID();
        await character.GetCorps();
        pastedCharacters.Add(character);
        //Count Progress
        charList.Remove(charName);
        CurrentCount++;
        Progress = (int) Math.Round((CurrentCount / (decimal) TotalCount) * 100);
        StateHasChanged();
    }
    catch (Exception)
    {
        Console.WriteLine("ESI error from "+charList[0]+", trying again");
    }
}
```

# Loading bars 🥳
People say take the small victories in life. This is one of those really simple changes that make all the difference. Because Blazor is loaded client side the page can be updated as processing is ongoing, this means we can show a live progress bar.

As you can see in this edited sample of the code you just need to set a counter and increment is each successful loop, then run a state change to tell the UI it needs to update and it will display the changes live on screen
```c#
public async Task CheckCharacters(MouseEventArgs e)
{
    //Progress bar prep
    Progress = 0;
    RunTimer = DateTime.Now;
    CurrentCount = 0;
    TotalCount = charList.Count;
    while (charList.Any())
    {
        CurrentCount++;
        Progress = (int) Math.Round((CurrentCount / (decimal) TotalCount) * 100);
        StateHasChanged();
    }
}
```
![Loading Bar Demo](/images/projects/CorpMatesLoading.gif)