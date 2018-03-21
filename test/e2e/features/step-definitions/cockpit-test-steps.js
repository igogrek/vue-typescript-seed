import {client} from 'nightwatch-cucumber';
import {Given, Then, When} from 'cucumber';

Given('I open button test page', async () =>
  client
    .url(client.globals.devServerURL)
    .waitForElementVisible('#app', 5000));

    Then('link is present', async () =>
    client.waitForElementVisible('.links links-item', 5000));
