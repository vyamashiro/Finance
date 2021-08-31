import { gql } from "@apollo/client";

const WEALTH_SUMMARY = gql`
  query MyQuery {
    wealthSummary {
      profitability
      total
      hasHistory
      id
      cdi
      gain
    }
  }
`;

export default WEALTH_SUMMARY;
