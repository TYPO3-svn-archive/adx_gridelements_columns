<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "adx_gridelements_columns".
 *
 * Auto generated 04-12-2012 14:03
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array(
	'title' => 'ad: Grid Elements Columns',
	'description' => 'Extends Grid Elements with flexible columns using Twitter Bootstraps grid system.',
	'category' => 'plugin',
	'shy' => 0,
	'version' => '1.0.0',
	'dependencies' => 't3jquery,gridelements,adx_twitter_bootstrap',
	'conflicts' => '',
	'priority' => '',
	'loadOrder' => '',
	'module' => '',
	'state' => 'stable',
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearcacheonload' => 1,
	'lockType' => '',
	'author' => 'Arno Dudek',
	'author_email' => 'webmaster@adgrafik.at',
	'author_company' => 'ad:grafik',
	'CGLcompliance' => '',
	'CGLcompliance_note' => '',
	'constraints' => array(
		'depends' => array(
			't3jquery' => '2.0.6-',
			'gridelements' => '1.2.0-',
			'adx_twitter_bootstrap' => '1.0.0',
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
	'_md5_values_when_last_written' => 'a:23:{s:12:"ext_icon.gif";s:4:"2569";s:17:"ext_localconf.php";s:4:"a22d";s:14:"ext_tables.php";s:4:"34fd";s:14:"ext_tables.sql";s:4:"0012";s:40:"Configuration/FlexForm/DSFourColumns.xml";s:4:"2b7b";s:41:"Configuration/FlexForm/DSThreeColumns.xml";s:4:"d488";s:39:"Configuration/FlexForm/DSTwoColumns.xml";s:4:"8000";s:37:"Configuration/TSconfig/FourColumns.ts";s:4:"0af5";s:38:"Configuration/TSconfig/ThreeColumns.ts";s:4:"6a54";s:36:"Configuration/TSconfig/TwoColumns.ts";s:4:"61c6";s:38:"Configuration/TypoScript/constants.txt";s:4:"3e9c";s:34:"Configuration/TypoScript/setup.txt";s:4:"630e";s:46:"Resources/Private/Language/de.locallang_db.xlf";s:4:"ebfe";s:50:"Resources/Private/Language/de.locallang_db_csh.xlf";s:4:"5982";s:43:"Resources/Private/Language/locallang_db.xlf";s:4:"8ae1";s:47:"Resources/Private/Language/locallang_db_csh.xlf";s:4:"5982";s:44:"Resources/Public/Icons/16x16/FourColumns.gif";s:4:"50d0";s:45:"Resources/Public/Icons/16x16/ThreeColumns.gif";s:4:"2569";s:43:"Resources/Public/Icons/16x16/TwoColumns.gif";s:4:"4a6d";s:44:"Resources/Public/Icons/24x24/FourColumns.gif";s:4:"057e";s:45:"Resources/Public/Icons/24x24/ThreeColumns.gif";s:4:"e33c";s:43:"Resources/Public/Icons/24x24/TwoColumns.gif";s:4:"f535";s:37:"Resources/Public/JavaScript/Common.js";s:4:"876c";}',
	'suggests' => array(
	),
);

?>