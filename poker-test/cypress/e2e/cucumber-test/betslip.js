import { Given, When, And ,Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on home page',()=>{
    cy.visit('https://www.pokerstars.uk/')
    ///<reference types="cypress-xpath" />

    cy.xpath("//button[@id='onetrust-accept-btn-handler']").click()
})