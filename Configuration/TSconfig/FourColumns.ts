
/**
 * tx_gridelements
 */
tx_gridelements.setup.tx_adxgridelementscolumns_fourcolumns {

	title = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang_db.xlf:TSconfig.fourColumns.title
	description = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang_db.xlf:TSconfig.fourColumns.description
	flexformDS = FILE:EXT:adx_gridelements_columns/Configuration/FlexForm/DSFourColumns.xml
	icon = EXT:adx_gridelements_columns/Resources/Public/Icons/24x24/FourColumns.gif,EXT:adx_gridelements_columns/Resources/Public/Icons/16x16/FourColumns.gif

	config {
		colCount = 4
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang_db.xlf:TSconfig.fourColumns.columnName.1
						colPos = 0
					}
					2 {
						name = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang_db.xlf:TSconfig.fourColumns.columnName.2
						colPos = 1
					}
					3 {
						name = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang_db.xlf:TSconfig.fourColumns.columnName.3
						colPos = 2
					}
					4 {
						name = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang_db.xlf:TSconfig.fourColumns.columnName.4
						colPos = 3
					}
				}
			}
		}
	}
}