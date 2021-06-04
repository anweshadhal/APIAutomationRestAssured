$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/ExchangeRateAPI.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Anwesha Dhal"
    }
  ],
  "line": 3,
  "name": "To verify the exchange rate of all countries",
  "description": "User wants to see the exchange rate of all countries",
  "id": "to-verify-the-exchange-rate-of-all-countries",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@ExchangeRate"
    }
  ]
});
formatter.scenarioOutline({
  "line": 7,
  "name": "To get the exchange rate of all countries",
  "description": "",
  "id": "to-verify-the-exchange-rate-of-all-countries;to-get-the-exchange-rate-of-all-countries",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@getAllcountriesExchangeRate"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "with the end point URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "request send with base code",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify the \"\u003cstatus\u003e\" in step",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "to-verify-the-exchange-rate-of-all-countries;to-get-the-exchange-rate-of-all-countries;",
  "rows": [
    {
      "cells": [
        "status"
      ],
      "line": 13,
      "id": "to-verify-the-exchange-rate-of-all-countries;to-get-the-exchange-rate-of-all-countries;;1"
    },
    {
      "cells": [
        "200"
      ],
      "line": 14,
      "id": "to-verify-the-exchange-rate-of-all-countries;to-get-the-exchange-rate-of-all-countries;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "To get the exchange rate of all countries",
  "description": "",
  "id": "to-verify-the-exchange-rate-of-all-countries;to-get-the-exchange-rate-of-all-countries;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@ExchangeRate"
    },
    {
      "line": 6,
      "name": "@getAllcountriesExchangeRate"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "with the end point URL",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "request send with base code",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "verify the \"200\" in step",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ExchangeRateSteps.with_the_end_point_URL()"
});
formatter.result({
  "duration": 314501601,
  "status": "passed"
});
formatter.match({
  "location": "ExchangeRateSteps.request_send_with_base_code()"
});
formatter.result({
  "duration": 6310655701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 12
    }
  ],
  "location": "ExchangeRateSteps.verify_the_in_step(String)"
});
formatter.result({
  "duration": 60086500,
  "status": "passed"
});
});