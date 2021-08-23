import { gql } from "apollo-boost";

export const productCardsQuery = gql`
	query productCards($category: CategoryInput) {
		category(input: $category) {
			name
			products {
				name
				inStock
				gallery
				prices {
					currency
					amount
				}
			}
		}
	}`
;