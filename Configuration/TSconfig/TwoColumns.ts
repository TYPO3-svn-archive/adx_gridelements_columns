
/**
 * tx_gridelements
 */
tx_gridelements.setup.tx_adxgridelementscolumns_twocolumns {

	title = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang_db.xlf:TSconfig.twoColumns.title
	description = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang_db.xlf:TSconfig.twoColumns.description
	flexformDS = FILE:EXT:adx_gridelements_columns/Configuration/FlexForm/DSTwoColumns.xml
	icon = EXT:adx_gridelements_columns/Resources/Public/Icons/24x24/TwoColumns.gif,EXT:adx_gridelements_columns/Resources/Public/Icons/16x16/TwoColumns.gif

	config {
		colCount = 2
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang_db.xlf:TSconfig.twoColumns.columnName.1
						colPos = 0
					}
					2 {
						name = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang_db.xlf:TSconfig.twoColumns.columnName.2
						colPos = 1
					}
				}
			}
		}
	}
}