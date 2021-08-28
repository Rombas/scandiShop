import { gql } from "apollo-boost";

export const productCardsQuery = gql`
	query productCards($category: CategoryInput) {
		category(input: $category) {
			name
			products {
				name
				brand
				inStock
				gallery
				attributes {
					id
					name
					type
					items {
						displayValue
						value
					}
				}
				description
				prices {
					currency
					amount
				}
			}
		}
	}`
;