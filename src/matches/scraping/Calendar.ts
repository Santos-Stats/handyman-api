import { Injectable } from '@nestjs/common';
import { url } from '../../api-config/urls';
import { getRequest } from '../../api-config/requests';
import * as cheerio from 'cheerio';
import { convertDate } from './FixDate';

@Injectable()
export class Calendar {
    async filterMatches() {
        try {
            const response = await getRequest(url.espn.Calendar);
            const $ = cheerio.load(response);

            // Extract information from all tables
            const allTables = $('.Table__fixtures');
            const allInformation = [];

            allTables.each((index, table) => {
                const tableInfo = this.extractTableInformation($, table);
                allInformation.push(...tableInfo);
            });

            console.log(JSON.stringify(allInformation, null, 2));
        } catch (error) {
            console.error(error);
        }
    }

    // Function to extract information from a table row
    extractRowInformation($, row) {
        const date = $(row).find('.Table__TD:first-child').text().trim().toString();
        const homeTeamElement = $(row).find('td:nth-child(2) div a');
        const awayTeamElement = $(row).find('td:nth-child(4) div a');
        
        const homeTeamName = homeTeamElement.text().trim();
        const homeTeamLogo = homeTeamElement.find('img').attr('src');

        const awayTeamName = awayTeamElement.text().trim();
        const awayTeamLogo = awayTeamElement.find('img').attr('src');

        const time = $(row).find('.Table__TD:nth-child(5) a').text().trim();
        const championship = $(row).find('.Table__TD:nth-child(6) span').text().trim();
        const fixedDate = convertDate(date)
        return {
            fixedDate,
            homeTeam: { name: homeTeamName, logo: homeTeamLogo },
            awayTeam: { name: awayTeamName, logo: awayTeamLogo },
            time,
            championship
        };
    }

    // Function to extract information from a table
    extractTableInformation($, table) {
        const information = [];

        $(table).find('.Table__TR--sm').each((index, row) => {
            const rowInfo = this.extractRowInformation($, row);
            information.push(rowInfo);
        });

        return information;
    }
}
