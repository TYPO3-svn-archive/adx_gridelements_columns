
/**
 * tx_gridelements
 */
tx_gridelements.setup.tx_adxgridelementscolumns_threecolumns {

	title = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang.xfl:threeColumns.title
	description = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang.xfl:threeColumns.description
	flexformDS = FILE:EXT:adx_gridelements_columns/Configuration/FlexForm/DSThreeColumns.xml
	icon = EXT:adx_gridelements_columns/Resources/Public/Icons/24x24/ThreeColumns.gif,EXT:ad_gridelements_flexslider/Resources/Public/Icons/16x16/ThreeColumns.gif

	config {
		colCount = 3
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang.xfl:threeColumns.columnName.1
						colPos = 0
					}
					2 {
						name = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang.xfl:threeColumns.columnName.2
						colPos = 1
					}
					3 {
						name = LLL:EXT:adx_gridelements_columns/Resources/Private/Language/locallang.xfl:threeColumns.columnName.3
						colPos = 2
					}
				}
			}
		}
	}
}