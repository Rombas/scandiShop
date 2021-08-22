import { gql } from "apollo-boost";

export const categoriesQuery = gql`
	query {
		categories {
			name
		}
	}`
;