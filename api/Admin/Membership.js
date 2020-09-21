const express = require("express");
const router = express.Router();

router.get("/type", (req, res, next) => {
  const response = {
    current_page: parseInt(req.query.page) || 1,
    data: [
      {
        id: 100,
        membershipType: "Brody Dixon",
        ncc: "USA",
        membershipPeriodType: "Monthly",
        membershipPeriod: "August 21, 2020",
        membershipPeriodEndDate: "August 21, 2021",
        membershipTextEnglish: "Brody Dixon",
        membershipTextNepali: "Nepali Text",
      },
      {
        id: 199,
        membershipType: "Suman Gauchan",
        ncc: "Nepal",
        membershipPeriodType: "Lifetime",
        membershipPeriod: "August 21, 2020",
        membershipPeriodEndDate: "-",
        membershipTextEnglish: "Suman Gauchan",
        membershipTextNepali: "Nepali Text",
      },
      {
        id: 130,
        membershipType: "Pratik Poudel",
        ncc: "Hongkong",
        membershipPeriodType: "Subscription",
        membershipPeriod: "August 21, 2020",
        membershipPeriodEndDate: "August 21, 2021",
        membershipTextEnglish: "Pratik Poudel",
        membershipTextNepali: "Nepali Text",
      },
    ],
    first_page_url:
      "http://backend-dev.migrateagent.com/api/agency/profile/reviews?page=1",
    from: 1,
    last_page: 3,
    last_page_url:
      "http://backend-dev.migrateagent.com/api/agency/profile/reviews?page=1",
    next_page_url: null,
    path: "http://backend-dev.migrateagent.com/api/agency/profile/reviews",
    per_page: parseInt(req.query.entries) || 10,
    prev_page_url: null,
    to: 1,
    total: 1,
  };
  res.status(200).json(response);
});

router.get("/type/:id", (req, res, next) => {
  var response;
  if (req.params.id === "100") {
    response = {
      id: 100,
      membershipType: "Brody Dixon",
      ncc: "USA",
      membershipPeriodType: "Monthly",
      membershipPeriod: "August 21, 2020",
      membershipPeriodEndDate: "August 21, 2021",
      membershipTextEnglish: "Brody Dixon",
      membershipTextNepali: "Nepali Text",
    };
  }

  if (req.params.id === "199") {
    response = {
      id: 199,
      membershipType: "Suman Gauchan",
      ncc: "Nepal",
      membershipPeriodType: "Lifetime",
      membershipPeriod: "August 21, 2020",
      membershipPeriodEndDate: "-",
      membershipTextEnglish: "Suman Gauchan",
      membershipTextNepali: "Nepali Text",
    };
  }

  if (req.params.id === "130") {
    response = {
      id: 130,
      membershipType: "Pratik Poudel",
      ncc: "Hongkong",
      membershipPeriodType: "Subscription",
      membershipPeriod: "August 21, 2020",
      membershipPeriodEndDate: "August 21, 2021",
      membershipTextEnglish: "Pratik Poudel",
      membershipTextNepali: "Nepali Text",
    };
  }
  res.status(200).json(response);
});

router.get("/fee", (req, res, next) => {
  const response = {
    current_page: parseInt(req.query.page) || 1,
    data: [
      {
        id: 100,
        membershipType: "Suman Gauchan",
        ncc: "Nepal",
        membershipFee: "Rs.999",
        iccFee: "Rs.10000",
      },
      {
        id: 199,
        membershipType: "Brody Dixon",
        ncc: "USA",
        membershipFee: "$99.9",
        iccFee: "$1000",
      },
      {
        id: 130,
        membershipType: "Pratik Poudel",
        ncc: "Nepal",
        membershipFee: "Rs.999",
        iccFee: "Rs.10000",
      },
    ],
    first_page_url:
      "http://backend-dev.migrateagent.com/api/agency/profile/reviews?page=1",
    from: 1,
    last_page: 3,
    last_page_url:
      "http://backend-dev.migrateagent.com/api/agency/profile/reviews?page=1",
    next_page_url: null,
    path: "http://backend-dev.migrateagent.com/api/agency/profile/reviews",
    per_page: parseInt(req.query.entries) || 10,
    prev_page_url: null,
    to: 1,
    total: 1,
  };
  res.status(200).json(response);
});

router.get("/fee/:id", (req, res, next) => {
  var response;
  if (req.params.id === "100") {
    response = {
      id: 100,
      membershipType: "Suman Gauchan",
      ncc: "Nepal",
      membershipFee: "Rs.999",
      iccFee: "Rs.10000",
    };
  }

  if (req.params.id === "199") {
    response = {
      id: 199,
      membershipType: "Brody Dixon",
      ncc: "USA",
      membershipFee: "$99.9",
      iccFee: "$1000",
    };
  }

  if (req.params.id === "130") {
    response = {
      id: 130,
      membershipType: "Pratik Poudel",
      ncc: "Nepal",
      membershipFee: "Rs.999",
      iccFee: "Rs.10000",
    };
  }

  res.status(200).json(response);
});

module.exports = router;
