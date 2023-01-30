# Cooler Problem

This repo contains a full-stack Typescript application representative of Cooler Screen's web-app
technology stack. The section below provides a coding problem we would like you to solve to get an
understanding of your coding and problem solving ability.

Please do not host your solution to this problem in a public repository.

## Problem Statement

As an advertising company, Cooler Screens is very interested in the performance of the ads we play.
In the provided web framework, provide the following capabilities to help analyze ad play performance 
by:

**Create an API to Receive an [Impression](https://support.google.com/google-ads/answer/6320?hl=en#:~:text=How%20often%20your%20ad%20is,site%20on%20the%20Google%20Network.) Log**

Add an HTTP API that receives an "impression log" in JSON format. The schema of the impression log
is:

```typescript 
interface ImpressionLog {
    screenId: string
    campaignId: string
    timestamp: string | number  // Choose whichever format you prefer
    impressions: number         // Will always be an integer number
}
```

**UI Summary**

Based on the impressions sent to the API we are interested in a summary of the plays an impressions
received. Display a summary containing the following information:

- For every unique campaign Id, show the number of plays, grouped by hour
- For every unique screen Id, show the number of plays, grouped by hour
- For every unique campaign Id, show the number of impressions, grouped by hour
- For every unique screen Id, show the number of impressions, grouped by hour

*Note: Impressions is the sum of the `impressions` field across all records within an hour*
*Note: Plays is the count of impression logs within an hour. Each log is 1 play*

**UI Filter**

Provide an input field that takes a number as an input, and returns only the campaign/hour combination
where the total number of impressions was less than the input value.

You will not be evaluated on the aesthetics of your UI solution.

## Getting Started

Start the UI and API by executing the root makefile. 

```
$ make
```

The UI will start at localhost:3000, and the api at localhost:4000

Cooler Screens developers work primarily in Mac or Linux environments. If you're using Windows 
we recommend the [WSL](https://learn.microsoft.com/en-us/windows/wsl/install)

Alternatively, the project can be run by manually executing the commands found in each folders makefile,
these should work as long as node is available.
