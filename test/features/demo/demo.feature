Feature: Demo feature

    @demo
    Scenario Outline: Running first demo features
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the first search result
        Then URL should match <ExpectedURL>

        Examples:
            | TestID | SearchItem | ExpectedURL           |
            | TC-01  | WDIO       | https://webdriver.io/ |