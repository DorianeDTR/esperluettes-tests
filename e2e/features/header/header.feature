Feature: Header Esperluette Feature

Background:
    Given I am on the Homepage

@Automated
Scenario: Access to the library page
    When I clic on the library button
    Then I am redirected to the library page from the header

@Automated
Scenario: Access to the news page
    When I clic on the news button
    Then I am redirected to the news page from the header