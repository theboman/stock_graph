# D3 Stock Graph 
## Excercise to show the degree of peril some publicly traded compnaies are...

## Starting with Airlines in the US
---
## Current Dev Req.
#### scrapper portion
- node
- axios?
- puppeteer
- cheerio

## Tools used
- VS code
- Figma


---
# overview of project
The goal of the projet is to show Companies that are in peril, since the pandamic hit the US. We'll use this date of March 1st of 2020 to light the embers. We will compile a visual story for publicly traded companies, and show what companies are in real trouble. Contrary to news sources, we will demonstrate using some financial analisis/sluthing and determin the liklyhood of failure. We will show the estimated time to KO / throw in the towel. And the necessatity of declaring bankruptcy. We will start this project showing visual graphs of when corporate cash flow will run out, and them compute a probablity of turning the tide of finacial loss per day / month / quarter and lack of profit. How much will burn them out and if there is any light at the end of the tunnel with at least breaking even... A very very dark prospect with the escalling positive cases in the US. 

Bankruptcy in the US, Is very special. This should be seen more as a tool for continued existance. The US has a special carte blance offer for companies on the brink, it alows continued operation and to wipe all debt from its repsonaiblity. So why not?...Well, for the stakeholders this could mean they are out a job. Since operations of the company would be handed most likely for a bit of time over to the court. So mainly ego holds them back. I mean after all whats a few $10 billion dollars of debt?... There seems to be 2 schools of thought to debt corporate principles that don't really care about debt and ones that hate it. The finacial guru of Wall St. dont seem to care much if a compnay has debt as long as they can pay the fees assiociated with the borrowing. This always seems to be the rope to hang yourself, and conversly the golden goose to take advantage of if you are not in it for the long run. Ask, the owners of Sears, or Hertz... 

Note we will show the doom cycle of a company, the play book to borrowing money...
- Cash in the bank or cash on hand 
- Borrowing money, while they have a good loan rating.. Line(s) of credit to x amount blah blah. You will hear alot about these getting downgraded, esecially right now.
- to turning all assets into borrowing mechanisms, a sure sign of getting worse in a banks eye. Airlines were using frequent miles memberships... Their virtual currnecy, Airline Bitcoin and using this a real cash. 
- Bond / secure note offering... a special IOU from a corporation...
- Offering more shares turning worthless paper into hard cash / this typically devalues all shares at the same time, your getting ot the bottom of the barrel here.
- Looking for white horse investors willing to bailout... 
- Send the lawyers into first talks about bankruptcy 
- Declare bankruptcy which flavor? most likly chapter 11

We contradict news / pr sources since a lot of these stem from agencies on the behalf of the airlines who by finacial necessity / exisitance will do everyhting in their power to promote a different and often contradictory rosy picture of their soon or already sunny and booming business. Terms like "Less than expected losses" are not positive. 

We start with the US Airline business. Our unfortunate victimes are and what at that time was their declared daily burn rates, in addition we'll use public data for how much cash they had on hand or could borrow back in March of 2020, and what they have done to add to their war chests since. 


Delta Airlines, burn rate, market cap, # of shares, # employees, # planes operating, # serviced routes - all from March '20
United Airlines
American Airlines

Alaska Airlines
Southwest 
Jet Blue

Spirit
Frontier 

Hawaian 





Lets use hard facts for Airline Traffic in the US and to do so we'll use the TSA's security gate numbers and thankfully the show year over year numbers. This is our first hard fact of the busienss at hand.


## Tasks 
- build scrapper for TSA flight data - this URL [TSA](https://www.tsa.gov/coronavirus/passenger-throughput?mod=article_inline)
    some issues 
    + cannot seem to display page? Is this because of the server side rendering? 
    + Https also an issue installed https for node... seems to have fixed?

- get firestore working //working! 
- add data to firestore //got some need daily updates from TSA
- need to inport date or milliseconds so can sort data returned

- add as a cron job to Digital ocean server


- wireframe out how data will be displayed / sort of working
    - 
- get data into D3 portion