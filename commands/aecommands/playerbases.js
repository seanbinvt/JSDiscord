var chrome = require('selenium-webdriver/chrome');
var path = require('chromedriver').path;
var config = require('../../config.json');

const puppeteer = require('puppeteer');
var service = new chrome.ServiceBuilder(path).build();
chrome.setDefaultService(service);

const Commando = require('discord.js-commando');
var fs = require('fs');

class PlayerBasesCommand extends Commando.Command {
    constructor(client) {
    super(client,{
        name:'playerbases',
        group: 'aecommands',
        memberName: 'playerbases',
        description: "Get bases of specific player in your guild's DB.",
    });
    }
    async run(message, args) {
        while(args.charAt(0) === ' '){
            input = input.substr(1);
           }
        var argsArr = args.split(' ');
        var server = argsArr[0].toString();
        var id = argsArr[1];
        console.log("From "+message.author.username+" - "+message.author.toString()+": Sending bases of player #"+id);

        const browser =  await puppeteer.launch({headless: false}); // prevent non-needed isssues
        const page = await browser.newPage();

        await page.goto("http://" + server.toString() +".astroempires.com/report.aspx?view=player");
        await page.waitForSelector('#login_menu-inside > div.box5_content > div.box5_ctr > form > table > tbody > tr:nth-child(1) > td > input');
        await page.click('#login_menu-inside > div.box5_content > div.box5_ctr > form > table > tbody > tr:nth-child(1) > td > input');
        await page.keyboard.type(config.aeMail);
        await page.click('#login_menu-inside > div.box5_content > div.box5_ctr > form > table > tbody > tr:nth-child(2) > td > input');
        await page.keyboard.type(config.aePass);
        await page.click('#login_menu-inside > div.box5_content > div.box5_ctr > form > table > tbody > tr:nth-child(7) > th > input');

        await page.waitForSelector('#empire_reports > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > form > table > tbody > tr > td:nth-child(1) > input');
        await page.click('#empire_reports > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > form > table > tbody > tr > td:nth-child(1) > input');
        await page.keyboard.type(id);
        await page.click('#empire_reports > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > form > table > tbody > tr > td:nth-child(3) > input');
        await page.waitForXPath('//*[@id="empire_reports"]/tbody/tr[2]/td/table/tbody/tr/td[2]/table/thead/tr/th[1]/div');

        var locations = [];
           var element;
           var text;
        element = await page.$("#empire_reports > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > table > thead > tr > th.sorttable_sorted_down.sorttable_adown.sorttable_adown > div");
        text = await page.evaluate(element => element.textContent, element);

        locations.push(text+"s\n");
        var i = 1;
        while(i >= 1) {
        try {
        element = await page.$("#empire_reports > tbody > tr:nth-child(2) > td > table > tbody > tr > td:nth-child(2) > table > tbody > tr:nth-child("+i+") > td:nth-child(3)");
        text = await page.evaluate(element => element.textContent, element);

        locations.push(text+"\n");
        i++;
        } catch(error) {
            break;
        }
        }
        if(locations.length > 1) {
          message.reply("Player #"+id+"\n"+locations);
        } else {
          message.reply("Player #"+id+" has no bases present in regions where your guild has fleets or bases, or in regions recently visited by your guild fleets.");
        }
        browser.close();
}
}

module.exports = PlayerBasesCommand;