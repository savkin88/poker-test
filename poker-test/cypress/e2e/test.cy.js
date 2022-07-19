describe('checking adding and removing betslip functionality ', () => {
  it('open browser ', () => {
    cy.visit('https://www.pokerstars.uk/')
    ///<reference types="cypress-xpath" />

    cy.xpath("//button[@id='onetrust-accept-btn-handler']").click()
    
  })
  it('adding and removing shelbourne from betslip',()=>{
    //click on sports
cy.xpath('//div[@class="_d56f6f0 _41402c0 _4b5c234"]//img[@alt="Brand icon sports"]').click()
//accept cookies
cy.xpath("//button[@id='onetrust-accept-btn-handler']").click()
//click on football
cy.xpath('//span[@class="sportsList__label"][normalize-space()="Football"]').click()
//clcik on irish premier division
cy.xpath('//span[@class="basicList__title"][normalize-space()="Irish Premier Division"]').click()
//click on ucd
cy.xpath("//span[@id='event-schedule-participants-24847316']/child::div//child::div[contains(text(),'Ucd')]").click()
//click on shelbourne to add in betslip
cy.xpath("//em[@class='button__bet__title button__bet__title--auto button__bet__title--break'][normalize-space()='Shelbourne']").click()
//remove shelbourne from bet slip 
cy.xpath('//li[@id="single-bet-li-bet-5368525703"]//i[@class="icon-remove"]').click({force:true})


  })
  it('adding and removing vikingur gota from betslip',()=>{
    //click on Europa Conference League
    
    cy.xpath('//span[@class="basicList__title"][normalize-space()="Europa Conference League"]').click()
    //click on Vikingur Gota
    cy.xpath('//span[@id="event-schedule-participants-24935899"]/child::div//child::div[contains(text(),"Vikingur Gota")]').click()
    //click on vikingur gota home to add in betslip 
    cy.xpath('//em[@class="button__bet__title button__bet__title--auto button__bet__title--break"][normalize-space()="Vikingur Gota"]').click()
    //remove vikingur gota from bet slip 
    cy.xpath('//li[@id="single-bet-li-bet-5387998258"]//a[@title="Remove selection"]').click({force:true})


})
})