import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	BigDecimal: any;
	BigInt: any;
	Bytes: any;
};

export type Aavegotchi = {
	__typename?: "Aavegotchi";
	id: Scalars["ID"];
	gotchiId?: Maybe<Scalars["BigInt"]>;
	owner?: Maybe<User>;
	portal: Portal;
	hauntId: Scalars["BigInt"];
	name: Scalars["String"];
	randomNumber: Scalars["BigInt"];
	status: Scalars["BigInt"];
	numericTraits: Array<Scalars["Int"]>;
	modifiedNumericTraits: Array<Scalars["Int"]>;
	withSetsNumericTraits?: Maybe<Array<Scalars["Int"]>>;
	equippedWearables: Array<Scalars["Int"]>;
	equippedSetID?: Maybe<Scalars["BigInt"]>;
	equippedSetName?: Maybe<Scalars["String"]>;
	possibleSets?: Maybe<Scalars["BigInt"]>;
	collateral: Scalars["Bytes"];
	escrow: Scalars["Bytes"];
	stakedAmount: Scalars["BigInt"];
	minimumStake: Scalars["BigInt"];
	kinship: Scalars["BigInt"];
	lastInteracted: Scalars["BigInt"];
	timesInteracted: Scalars["BigInt"];
	experience: Scalars["BigInt"];
	toNextLevel: Scalars["BigInt"];
	usedSkillPoints: Scalars["BigInt"];
	level: Scalars["BigInt"];
	baseRarityScore: Scalars["BigInt"];
	modifiedRarityScore: Scalars["BigInt"];
	withSetsRarityScore?: Maybe<Scalars["BigInt"]>;
	locked: Scalars["Boolean"];
	listings: Array<Erc721Listing>;
	/** Block in which the Aavegotchi entity was created */
	createdAt?: Maybe<Scalars["BigInt"]>;
	/** Block in which the Aavegotchi was claimed. Should coincide with createdAt */
	claimedAt?: Maybe<Scalars["BigInt"]>;
	timesTraded: Scalars["BigInt"];
};

export type AavegotchiListingsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Erc721Listing_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Erc721Listing_Filter>;
};

export type AavegotchiOption = {
	__typename?: "AavegotchiOption";
	/** AavegotchiOption id is composed by <PORTAL-ID>-<GOTCHI-OPTION> */
	id: Scalars["ID"];
	owner: User;
	portal: Portal;
	randomNumber: Scalars["BigInt"];
	numericTraits: Array<Scalars["Int"]>;
	collateralType: Scalars["Bytes"];
	minimumStake: Scalars["BigInt"];
	baseRarityScore: Scalars["Int"];
};

export type AavegotchiOption_Filter = {
	id?: Maybe<Scalars["ID"]>;
	id_not?: Maybe<Scalars["ID"]>;
	id_gt?: Maybe<Scalars["ID"]>;
	id_lt?: Maybe<Scalars["ID"]>;
	id_gte?: Maybe<Scalars["ID"]>;
	id_lte?: Maybe<Scalars["ID"]>;
	id_in?: Maybe<Array<Scalars["ID"]>>;
	id_not_in?: Maybe<Array<Scalars["ID"]>>;
	owner?: Maybe<Scalars["String"]>;
	owner_not?: Maybe<Scalars["String"]>;
	owner_gt?: Maybe<Scalars["String"]>;
	owner_lt?: Maybe<Scalars["String"]>;
	owner_gte?: Maybe<Scalars["String"]>;
	owner_lte?: Maybe<Scalars["String"]>;
	owner_in?: Maybe<Array<Scalars["String"]>>;
	owner_not_in?: Maybe<Array<Scalars["String"]>>;
	owner_contains?: Maybe<Scalars["String"]>;
	owner_not_contains?: Maybe<Scalars["String"]>;
	owner_starts_with?: Maybe<Scalars["String"]>;
	owner_not_starts_with?: Maybe<Scalars["String"]>;
	owner_ends_with?: Maybe<Scalars["String"]>;
	owner_not_ends_with?: Maybe<Scalars["String"]>;
	portal?: Maybe<Scalars["String"]>;
	portal_not?: Maybe<Scalars["String"]>;
	portal_gt?: Maybe<Scalars["String"]>;
	portal_lt?: Maybe<Scalars["String"]>;
	portal_gte?: Maybe<Scalars["String"]>;
	portal_lte?: Maybe<Scalars["String"]>;
	portal_in?: Maybe<Array<Scalars["String"]>>;
	portal_not_in?: Maybe<Array<Scalars["String"]>>;
	portal_contains?: Maybe<Scalars["String"]>;
	portal_not_contains?: Maybe<Scalars["String"]>;
	portal_starts_with?: Maybe<Scalars["String"]>;
	portal_not_starts_with?: Maybe<Scalars["String"]>;
	portal_ends_with?: Maybe<Scalars["String"]>;
	portal_not_ends_with?: Maybe<Scalars["String"]>;
	randomNumber?: Maybe<Scalars["BigInt"]>;
	randomNumber_not?: Maybe<Scalars["BigInt"]>;
	randomNumber_gt?: Maybe<Scalars["BigInt"]>;
	randomNumber_lt?: Maybe<Scalars["BigInt"]>;
	randomNumber_gte?: Maybe<Scalars["BigInt"]>;
	randomNumber_lte?: Maybe<Scalars["BigInt"]>;
	randomNumber_in?: Maybe<Array<Scalars["BigInt"]>>;
	randomNumber_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	numericTraits?: Maybe<Array<Scalars["Int"]>>;
	numericTraits_not?: Maybe<Array<Scalars["Int"]>>;
	numericTraits_contains?: Maybe<Array<Scalars["Int"]>>;
	numericTraits_not_contains?: Maybe<Array<Scalars["Int"]>>;
	collateralType?: Maybe<Scalars["Bytes"]>;
	collateralType_not?: Maybe<Scalars["Bytes"]>;
	collateralType_in?: Maybe<Array<Scalars["Bytes"]>>;
	collateralType_not_in?: Maybe<Array<Scalars["Bytes"]>>;
	collateralType_contains?: Maybe<Scalars["Bytes"]>;
	collateralType_not_contains?: Maybe<Scalars["Bytes"]>;
	minimumStake?: Maybe<Scalars["BigInt"]>;
	minimumStake_not?: Maybe<Scalars["BigInt"]>;
	minimumStake_gt?: Maybe<Scalars["BigInt"]>;
	minimumStake_lt?: Maybe<Scalars["BigInt"]>;
	minimumStake_gte?: Maybe<Scalars["BigInt"]>;
	minimumStake_lte?: Maybe<Scalars["BigInt"]>;
	minimumStake_in?: Maybe<Array<Scalars["BigInt"]>>;
	minimumStake_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	baseRarityScore?: Maybe<Scalars["Int"]>;
	baseRarityScore_not?: Maybe<Scalars["Int"]>;
	baseRarityScore_gt?: Maybe<Scalars["Int"]>;
	baseRarityScore_lt?: Maybe<Scalars["Int"]>;
	baseRarityScore_gte?: Maybe<Scalars["Int"]>;
	baseRarityScore_lte?: Maybe<Scalars["Int"]>;
	baseRarityScore_in?: Maybe<Array<Scalars["Int"]>>;
	baseRarityScore_not_in?: Maybe<Array<Scalars["Int"]>>;
};

export enum AavegotchiOption_OrderBy {
	Id = "id",
	Owner = "owner",
	Portal = "portal",
	RandomNumber = "randomNumber",
	NumericTraits = "numericTraits",
	CollateralType = "collateralType",
	MinimumStake = "minimumStake",
	BaseRarityScore = "baseRarityScore",
}

export type Aavegotchi_Filter = {
	id?: Maybe<Scalars["ID"]>;
	id_not?: Maybe<Scalars["ID"]>;
	id_gt?: Maybe<Scalars["ID"]>;
	id_lt?: Maybe<Scalars["ID"]>;
	id_gte?: Maybe<Scalars["ID"]>;
	id_lte?: Maybe<Scalars["ID"]>;
	id_in?: Maybe<Array<Scalars["ID"]>>;
	id_not_in?: Maybe<Array<Scalars["ID"]>>;
	gotchiId?: Maybe<Scalars["BigInt"]>;
	gotchiId_not?: Maybe<Scalars["BigInt"]>;
	gotchiId_gt?: Maybe<Scalars["BigInt"]>;
	gotchiId_lt?: Maybe<Scalars["BigInt"]>;
	gotchiId_gte?: Maybe<Scalars["BigInt"]>;
	gotchiId_lte?: Maybe<Scalars["BigInt"]>;
	gotchiId_in?: Maybe<Array<Scalars["BigInt"]>>;
	gotchiId_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	owner?: Maybe<Scalars["String"]>;
	owner_not?: Maybe<Scalars["String"]>;
	owner_gt?: Maybe<Scalars["String"]>;
	owner_lt?: Maybe<Scalars["String"]>;
	owner_gte?: Maybe<Scalars["String"]>;
	owner_lte?: Maybe<Scalars["String"]>;
	owner_in?: Maybe<Array<Scalars["String"]>>;
	owner_not_in?: Maybe<Array<Scalars["String"]>>;
	owner_contains?: Maybe<Scalars["String"]>;
	owner_not_contains?: Maybe<Scalars["String"]>;
	owner_starts_with?: Maybe<Scalars["String"]>;
	owner_not_starts_with?: Maybe<Scalars["String"]>;
	owner_ends_with?: Maybe<Scalars["String"]>;
	owner_not_ends_with?: Maybe<Scalars["String"]>;
	hauntId?: Maybe<Scalars["BigInt"]>;
	hauntId_not?: Maybe<Scalars["BigInt"]>;
	hauntId_gt?: Maybe<Scalars["BigInt"]>;
	hauntId_lt?: Maybe<Scalars["BigInt"]>;
	hauntId_gte?: Maybe<Scalars["BigInt"]>;
	hauntId_lte?: Maybe<Scalars["BigInt"]>;
	hauntId_in?: Maybe<Array<Scalars["BigInt"]>>;
	hauntId_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	name?: Maybe<Scalars["String"]>;
	name_not?: Maybe<Scalars["String"]>;
	name_gt?: Maybe<Scalars["String"]>;
	name_lt?: Maybe<Scalars["String"]>;
	name_gte?: Maybe<Scalars["String"]>;
	name_lte?: Maybe<Scalars["String"]>;
	name_in?: Maybe<Array<Scalars["String"]>>;
	name_not_in?: Maybe<Array<Scalars["String"]>>;
	name_contains?: Maybe<Scalars["String"]>;
	name_not_contains?: Maybe<Scalars["String"]>;
	name_starts_with?: Maybe<Scalars["String"]>;
	name_not_starts_with?: Maybe<Scalars["String"]>;
	name_ends_with?: Maybe<Scalars["String"]>;
	name_not_ends_with?: Maybe<Scalars["String"]>;
	randomNumber?: Maybe<Scalars["BigInt"]>;
	randomNumber_not?: Maybe<Scalars["BigInt"]>;
	randomNumber_gt?: Maybe<Scalars["BigInt"]>;
	randomNumber_lt?: Maybe<Scalars["BigInt"]>;
	randomNumber_gte?: Maybe<Scalars["BigInt"]>;
	randomNumber_lte?: Maybe<Scalars["BigInt"]>;
	randomNumber_in?: Maybe<Array<Scalars["BigInt"]>>;
	randomNumber_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	status?: Maybe<Scalars["BigInt"]>;
	status_not?: Maybe<Scalars["BigInt"]>;
	status_gt?: Maybe<Scalars["BigInt"]>;
	status_lt?: Maybe<Scalars["BigInt"]>;
	status_gte?: Maybe<Scalars["BigInt"]>;
	status_lte?: Maybe<Scalars["BigInt"]>;
	status_in?: Maybe<Array<Scalars["BigInt"]>>;
	status_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	numericTraits?: Maybe<Array<Scalars["Int"]>>;
	numericTraits_not?: Maybe<Array<Scalars["Int"]>>;
	numericTraits_contains?: Maybe<Array<Scalars["Int"]>>;
	numericTraits_not_contains?: Maybe<Array<Scalars["Int"]>>;
	modifiedNumericTraits?: Maybe<Array<Scalars["Int"]>>;
	modifiedNumericTraits_not?: Maybe<Array<Scalars["Int"]>>;
	modifiedNumericTraits_contains?: Maybe<Array<Scalars["Int"]>>;
	modifiedNumericTraits_not_contains?: Maybe<Array<Scalars["Int"]>>;
	withSetsNumericTraits?: Maybe<Array<Scalars["Int"]>>;
	withSetsNumericTraits_not?: Maybe<Array<Scalars["Int"]>>;
	withSetsNumericTraits_contains?: Maybe<Array<Scalars["Int"]>>;
	withSetsNumericTraits_not_contains?: Maybe<Array<Scalars["Int"]>>;
	equippedWearables?: Maybe<Array<Scalars["Int"]>>;
	equippedWearables_not?: Maybe<Array<Scalars["Int"]>>;
	equippedWearables_contains?: Maybe<Array<Scalars["Int"]>>;
	equippedWearables_not_contains?: Maybe<Array<Scalars["Int"]>>;
	equippedSetID?: Maybe<Scalars["BigInt"]>;
	equippedSetID_not?: Maybe<Scalars["BigInt"]>;
	equippedSetID_gt?: Maybe<Scalars["BigInt"]>;
	equippedSetID_lt?: Maybe<Scalars["BigInt"]>;
	equippedSetID_gte?: Maybe<Scalars["BigInt"]>;
	equippedSetID_lte?: Maybe<Scalars["BigInt"]>;
	equippedSetID_in?: Maybe<Array<Scalars["BigInt"]>>;
	equippedSetID_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	equippedSetName?: Maybe<Scalars["String"]>;
	equippedSetName_not?: Maybe<Scalars["String"]>;
	equippedSetName_gt?: Maybe<Scalars["String"]>;
	equippedSetName_lt?: Maybe<Scalars["String"]>;
	equippedSetName_gte?: Maybe<Scalars["String"]>;
	equippedSetName_lte?: Maybe<Scalars["String"]>;
	equippedSetName_in?: Maybe<Array<Scalars["String"]>>;
	equippedSetName_not_in?: Maybe<Array<Scalars["String"]>>;
	equippedSetName_contains?: Maybe<Scalars["String"]>;
	equippedSetName_not_contains?: Maybe<Scalars["String"]>;
	equippedSetName_starts_with?: Maybe<Scalars["String"]>;
	equippedSetName_not_starts_with?: Maybe<Scalars["String"]>;
	equippedSetName_ends_with?: Maybe<Scalars["String"]>;
	equippedSetName_not_ends_with?: Maybe<Scalars["String"]>;
	possibleSets?: Maybe<Scalars["BigInt"]>;
	possibleSets_not?: Maybe<Scalars["BigInt"]>;
	possibleSets_gt?: Maybe<Scalars["BigInt"]>;
	possibleSets_lt?: Maybe<Scalars["BigInt"]>;
	possibleSets_gte?: Maybe<Scalars["BigInt"]>;
	possibleSets_lte?: Maybe<Scalars["BigInt"]>;
	possibleSets_in?: Maybe<Array<Scalars["BigInt"]>>;
	possibleSets_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	collateral?: Maybe<Scalars["Bytes"]>;
	collateral_not?: Maybe<Scalars["Bytes"]>;
	collateral_in?: Maybe<Array<Scalars["Bytes"]>>;
	collateral_not_in?: Maybe<Array<Scalars["Bytes"]>>;
	collateral_contains?: Maybe<Scalars["Bytes"]>;
	collateral_not_contains?: Maybe<Scalars["Bytes"]>;
	escrow?: Maybe<Scalars["Bytes"]>;
	escrow_not?: Maybe<Scalars["Bytes"]>;
	escrow_in?: Maybe<Array<Scalars["Bytes"]>>;
	escrow_not_in?: Maybe<Array<Scalars["Bytes"]>>;
	escrow_contains?: Maybe<Scalars["Bytes"]>;
	escrow_not_contains?: Maybe<Scalars["Bytes"]>;
	stakedAmount?: Maybe<Scalars["BigInt"]>;
	stakedAmount_not?: Maybe<Scalars["BigInt"]>;
	stakedAmount_gt?: Maybe<Scalars["BigInt"]>;
	stakedAmount_lt?: Maybe<Scalars["BigInt"]>;
	stakedAmount_gte?: Maybe<Scalars["BigInt"]>;
	stakedAmount_lte?: Maybe<Scalars["BigInt"]>;
	stakedAmount_in?: Maybe<Array<Scalars["BigInt"]>>;
	stakedAmount_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	minimumStake?: Maybe<Scalars["BigInt"]>;
	minimumStake_not?: Maybe<Scalars["BigInt"]>;
	minimumStake_gt?: Maybe<Scalars["BigInt"]>;
	minimumStake_lt?: Maybe<Scalars["BigInt"]>;
	minimumStake_gte?: Maybe<Scalars["BigInt"]>;
	minimumStake_lte?: Maybe<Scalars["BigInt"]>;
	minimumStake_in?: Maybe<Array<Scalars["BigInt"]>>;
	minimumStake_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	kinship?: Maybe<Scalars["BigInt"]>;
	kinship_not?: Maybe<Scalars["BigInt"]>;
	kinship_gt?: Maybe<Scalars["BigInt"]>;
	kinship_lt?: Maybe<Scalars["BigInt"]>;
	kinship_gte?: Maybe<Scalars["BigInt"]>;
	kinship_lte?: Maybe<Scalars["BigInt"]>;
	kinship_in?: Maybe<Array<Scalars["BigInt"]>>;
	kinship_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	lastInteracted?: Maybe<Scalars["BigInt"]>;
	lastInteracted_not?: Maybe<Scalars["BigInt"]>;
	lastInteracted_gt?: Maybe<Scalars["BigInt"]>;
	lastInteracted_lt?: Maybe<Scalars["BigInt"]>;
	lastInteracted_gte?: Maybe<Scalars["BigInt"]>;
	lastInteracted_lte?: Maybe<Scalars["BigInt"]>;
	lastInteracted_in?: Maybe<Array<Scalars["BigInt"]>>;
	lastInteracted_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	timesInteracted?: Maybe<Scalars["BigInt"]>;
	timesInteracted_not?: Maybe<Scalars["BigInt"]>;
	timesInteracted_gt?: Maybe<Scalars["BigInt"]>;
	timesInteracted_lt?: Maybe<Scalars["BigInt"]>;
	timesInteracted_gte?: Maybe<Scalars["BigInt"]>;
	timesInteracted_lte?: Maybe<Scalars["BigInt"]>;
	timesInteracted_in?: Maybe<Array<Scalars["BigInt"]>>;
	timesInteracted_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	experience?: Maybe<Scalars["BigInt"]>;
	experience_not?: Maybe<Scalars["BigInt"]>;
	experience_gt?: Maybe<Scalars["BigInt"]>;
	experience_lt?: Maybe<Scalars["BigInt"]>;
	experience_gte?: Maybe<Scalars["BigInt"]>;
	experience_lte?: Maybe<Scalars["BigInt"]>;
	experience_in?: Maybe<Array<Scalars["BigInt"]>>;
	experience_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	toNextLevel?: Maybe<Scalars["BigInt"]>;
	toNextLevel_not?: Maybe<Scalars["BigInt"]>;
	toNextLevel_gt?: Maybe<Scalars["BigInt"]>;
	toNextLevel_lt?: Maybe<Scalars["BigInt"]>;
	toNextLevel_gte?: Maybe<Scalars["BigInt"]>;
	toNextLevel_lte?: Maybe<Scalars["BigInt"]>;
	toNextLevel_in?: Maybe<Array<Scalars["BigInt"]>>;
	toNextLevel_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	usedSkillPoints?: Maybe<Scalars["BigInt"]>;
	usedSkillPoints_not?: Maybe<Scalars["BigInt"]>;
	usedSkillPoints_gt?: Maybe<Scalars["BigInt"]>;
	usedSkillPoints_lt?: Maybe<Scalars["BigInt"]>;
	usedSkillPoints_gte?: Maybe<Scalars["BigInt"]>;
	usedSkillPoints_lte?: Maybe<Scalars["BigInt"]>;
	usedSkillPoints_in?: Maybe<Array<Scalars["BigInt"]>>;
	usedSkillPoints_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	level?: Maybe<Scalars["BigInt"]>;
	level_not?: Maybe<Scalars["BigInt"]>;
	level_gt?: Maybe<Scalars["BigInt"]>;
	level_lt?: Maybe<Scalars["BigInt"]>;
	level_gte?: Maybe<Scalars["BigInt"]>;
	level_lte?: Maybe<Scalars["BigInt"]>;
	level_in?: Maybe<Array<Scalars["BigInt"]>>;
	level_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	baseRarityScore?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_not?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_gt?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_lt?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_gte?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_lte?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_in?: Maybe<Array<Scalars["BigInt"]>>;
	baseRarityScore_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	modifiedRarityScore?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_not?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_gt?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_lt?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_gte?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_lte?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_in?: Maybe<Array<Scalars["BigInt"]>>;
	modifiedRarityScore_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	withSetsRarityScore?: Maybe<Scalars["BigInt"]>;
	withSetsRarityScore_not?: Maybe<Scalars["BigInt"]>;
	withSetsRarityScore_gt?: Maybe<Scalars["BigInt"]>;
	withSetsRarityScore_lt?: Maybe<Scalars["BigInt"]>;
	withSetsRarityScore_gte?: Maybe<Scalars["BigInt"]>;
	withSetsRarityScore_lte?: Maybe<Scalars["BigInt"]>;
	withSetsRarityScore_in?: Maybe<Array<Scalars["BigInt"]>>;
	withSetsRarityScore_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	locked?: Maybe<Scalars["Boolean"]>;
	locked_not?: Maybe<Scalars["Boolean"]>;
	locked_in?: Maybe<Array<Scalars["Boolean"]>>;
	locked_not_in?: Maybe<Array<Scalars["Boolean"]>>;
	createdAt?: Maybe<Scalars["BigInt"]>;
	createdAt_not?: Maybe<Scalars["BigInt"]>;
	createdAt_gt?: Maybe<Scalars["BigInt"]>;
	createdAt_lt?: Maybe<Scalars["BigInt"]>;
	createdAt_gte?: Maybe<Scalars["BigInt"]>;
	createdAt_lte?: Maybe<Scalars["BigInt"]>;
	createdAt_in?: Maybe<Array<Scalars["BigInt"]>>;
	createdAt_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	claimedAt?: Maybe<Scalars["BigInt"]>;
	claimedAt_not?: Maybe<Scalars["BigInt"]>;
	claimedAt_gt?: Maybe<Scalars["BigInt"]>;
	claimedAt_lt?: Maybe<Scalars["BigInt"]>;
	claimedAt_gte?: Maybe<Scalars["BigInt"]>;
	claimedAt_lte?: Maybe<Scalars["BigInt"]>;
	claimedAt_in?: Maybe<Array<Scalars["BigInt"]>>;
	claimedAt_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	timesTraded?: Maybe<Scalars["BigInt"]>;
	timesTraded_not?: Maybe<Scalars["BigInt"]>;
	timesTraded_gt?: Maybe<Scalars["BigInt"]>;
	timesTraded_lt?: Maybe<Scalars["BigInt"]>;
	timesTraded_gte?: Maybe<Scalars["BigInt"]>;
	timesTraded_lte?: Maybe<Scalars["BigInt"]>;
	timesTraded_in?: Maybe<Array<Scalars["BigInt"]>>;
	timesTraded_not_in?: Maybe<Array<Scalars["BigInt"]>>;
};

export enum Aavegotchi_OrderBy {
	Id = "id",
	GotchiId = "gotchiId",
	Owner = "owner",
	Portal = "portal",
	HauntId = "hauntId",
	Name = "name",
	RandomNumber = "randomNumber",
	Status = "status",
	NumericTraits = "numericTraits",
	ModifiedNumericTraits = "modifiedNumericTraits",
	WithSetsNumericTraits = "withSetsNumericTraits",
	EquippedWearables = "equippedWearables",
	EquippedSetId = "equippedSetID",
	EquippedSetName = "equippedSetName",
	PossibleSets = "possibleSets",
	Collateral = "collateral",
	Escrow = "escrow",
	StakedAmount = "stakedAmount",
	MinimumStake = "minimumStake",
	Kinship = "kinship",
	LastInteracted = "lastInteracted",
	TimesInteracted = "timesInteracted",
	Experience = "experience",
	ToNextLevel = "toNextLevel",
	UsedSkillPoints = "usedSkillPoints",
	Level = "level",
	BaseRarityScore = "baseRarityScore",
	ModifiedRarityScore = "modifiedRarityScore",
	WithSetsRarityScore = "withSetsRarityScore",
	Locked = "locked",
	Listings = "listings",
	CreatedAt = "createdAt",
	ClaimedAt = "claimedAt",
	TimesTraded = "timesTraded",
}

export type Block_Height = {
	hash?: Maybe<Scalars["Bytes"]>;
	number?: Maybe<Scalars["Int"]>;
};

export type Erc1155Listing = {
	__typename?: "ERC1155Listing";
	id: Scalars["ID"];
	category: Scalars["BigInt"];
	erc1155TokenAddress: Scalars["Bytes"];
	erc1155TypeId: Scalars["BigInt"];
	seller: Scalars["Bytes"];
	priceInWei: Scalars["BigInt"];
	quantity: Scalars["BigInt"];
	cancelled: Scalars["Boolean"];
	timeCreated: Scalars["BigInt"];
	timeLastPurchased: Scalars["BigInt"];
	sold: Scalars["Boolean"];
	rarityLevel?: Maybe<Scalars["BigInt"]>;
};

export type Erc1155Listing_Filter = {
	id?: Maybe<Scalars["ID"]>;
	id_not?: Maybe<Scalars["ID"]>;
	id_gt?: Maybe<Scalars["ID"]>;
	id_lt?: Maybe<Scalars["ID"]>;
	id_gte?: Maybe<Scalars["ID"]>;
	id_lte?: Maybe<Scalars["ID"]>;
	id_in?: Maybe<Array<Scalars["ID"]>>;
	id_not_in?: Maybe<Array<Scalars["ID"]>>;
	category?: Maybe<Scalars["BigInt"]>;
	category_not?: Maybe<Scalars["BigInt"]>;
	category_gt?: Maybe<Scalars["BigInt"]>;
	category_lt?: Maybe<Scalars["BigInt"]>;
	category_gte?: Maybe<Scalars["BigInt"]>;
	category_lte?: Maybe<Scalars["BigInt"]>;
	category_in?: Maybe<Array<Scalars["BigInt"]>>;
	category_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc1155TokenAddress?: Maybe<Scalars["Bytes"]>;
	erc1155TokenAddress_not?: Maybe<Scalars["Bytes"]>;
	erc1155TokenAddress_in?: Maybe<Array<Scalars["Bytes"]>>;
	erc1155TokenAddress_not_in?: Maybe<Array<Scalars["Bytes"]>>;
	erc1155TokenAddress_contains?: Maybe<Scalars["Bytes"]>;
	erc1155TokenAddress_not_contains?: Maybe<Scalars["Bytes"]>;
	erc1155TypeId?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_not?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_gt?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_lt?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_gte?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_lte?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc1155TypeId_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	seller?: Maybe<Scalars["Bytes"]>;
	seller_not?: Maybe<Scalars["Bytes"]>;
	seller_in?: Maybe<Array<Scalars["Bytes"]>>;
	seller_not_in?: Maybe<Array<Scalars["Bytes"]>>;
	seller_contains?: Maybe<Scalars["Bytes"]>;
	seller_not_contains?: Maybe<Scalars["Bytes"]>;
	priceInWei?: Maybe<Scalars["BigInt"]>;
	priceInWei_not?: Maybe<Scalars["BigInt"]>;
	priceInWei_gt?: Maybe<Scalars["BigInt"]>;
	priceInWei_lt?: Maybe<Scalars["BigInt"]>;
	priceInWei_gte?: Maybe<Scalars["BigInt"]>;
	priceInWei_lte?: Maybe<Scalars["BigInt"]>;
	priceInWei_in?: Maybe<Array<Scalars["BigInt"]>>;
	priceInWei_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	quantity?: Maybe<Scalars["BigInt"]>;
	quantity_not?: Maybe<Scalars["BigInt"]>;
	quantity_gt?: Maybe<Scalars["BigInt"]>;
	quantity_lt?: Maybe<Scalars["BigInt"]>;
	quantity_gte?: Maybe<Scalars["BigInt"]>;
	quantity_lte?: Maybe<Scalars["BigInt"]>;
	quantity_in?: Maybe<Array<Scalars["BigInt"]>>;
	quantity_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	cancelled?: Maybe<Scalars["Boolean"]>;
	cancelled_not?: Maybe<Scalars["Boolean"]>;
	cancelled_in?: Maybe<Array<Scalars["Boolean"]>>;
	cancelled_not_in?: Maybe<Array<Scalars["Boolean"]>>;
	timeCreated?: Maybe<Scalars["BigInt"]>;
	timeCreated_not?: Maybe<Scalars["BigInt"]>;
	timeCreated_gt?: Maybe<Scalars["BigInt"]>;
	timeCreated_lt?: Maybe<Scalars["BigInt"]>;
	timeCreated_gte?: Maybe<Scalars["BigInt"]>;
	timeCreated_lte?: Maybe<Scalars["BigInt"]>;
	timeCreated_in?: Maybe<Array<Scalars["BigInt"]>>;
	timeCreated_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	timeLastPurchased?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_not?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_gt?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_lt?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_gte?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_lte?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_in?: Maybe<Array<Scalars["BigInt"]>>;
	timeLastPurchased_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	sold?: Maybe<Scalars["Boolean"]>;
	sold_not?: Maybe<Scalars["Boolean"]>;
	sold_in?: Maybe<Array<Scalars["Boolean"]>>;
	sold_not_in?: Maybe<Array<Scalars["Boolean"]>>;
	rarityLevel?: Maybe<Scalars["BigInt"]>;
	rarityLevel_not?: Maybe<Scalars["BigInt"]>;
	rarityLevel_gt?: Maybe<Scalars["BigInt"]>;
	rarityLevel_lt?: Maybe<Scalars["BigInt"]>;
	rarityLevel_gte?: Maybe<Scalars["BigInt"]>;
	rarityLevel_lte?: Maybe<Scalars["BigInt"]>;
	rarityLevel_in?: Maybe<Array<Scalars["BigInt"]>>;
	rarityLevel_not_in?: Maybe<Array<Scalars["BigInt"]>>;
};

export enum Erc1155Listing_OrderBy {
	Id = "id",
	Category = "category",
	Erc1155TokenAddress = "erc1155TokenAddress",
	Erc1155TypeId = "erc1155TypeId",
	Seller = "seller",
	PriceInWei = "priceInWei",
	Quantity = "quantity",
	Cancelled = "cancelled",
	TimeCreated = "timeCreated",
	TimeLastPurchased = "timeLastPurchased",
	Sold = "sold",
	RarityLevel = "rarityLevel",
}

export type Erc1155Purchase = {
	__typename?: "ERC1155Purchase";
	id: Scalars["ID"];
	listingID: Scalars["BigInt"];
	category: Scalars["BigInt"];
	erc1155TokenAddress: Scalars["Bytes"];
	erc1155TypeId: Scalars["BigInt"];
	seller: Scalars["Bytes"];
	buyer: Scalars["Bytes"];
	priceInWei: Scalars["BigInt"];
	quantity: Scalars["BigInt"];
	timeLastPurchased: Scalars["BigInt"];
	rarityLevel?: Maybe<Scalars["BigInt"]>;
};

export type Erc1155Purchase_Filter = {
	id?: Maybe<Scalars["ID"]>;
	id_not?: Maybe<Scalars["ID"]>;
	id_gt?: Maybe<Scalars["ID"]>;
	id_lt?: Maybe<Scalars["ID"]>;
	id_gte?: Maybe<Scalars["ID"]>;
	id_lte?: Maybe<Scalars["ID"]>;
	id_in?: Maybe<Array<Scalars["ID"]>>;
	id_not_in?: Maybe<Array<Scalars["ID"]>>;
	listingID?: Maybe<Scalars["BigInt"]>;
	listingID_not?: Maybe<Scalars["BigInt"]>;
	listingID_gt?: Maybe<Scalars["BigInt"]>;
	listingID_lt?: Maybe<Scalars["BigInt"]>;
	listingID_gte?: Maybe<Scalars["BigInt"]>;
	listingID_lte?: Maybe<Scalars["BigInt"]>;
	listingID_in?: Maybe<Array<Scalars["BigInt"]>>;
	listingID_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	category?: Maybe<Scalars["BigInt"]>;
	category_not?: Maybe<Scalars["BigInt"]>;
	category_gt?: Maybe<Scalars["BigInt"]>;
	category_lt?: Maybe<Scalars["BigInt"]>;
	category_gte?: Maybe<Scalars["BigInt"]>;
	category_lte?: Maybe<Scalars["BigInt"]>;
	category_in?: Maybe<Array<Scalars["BigInt"]>>;
	category_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc1155TokenAddress?: Maybe<Scalars["Bytes"]>;
	erc1155TokenAddress_not?: Maybe<Scalars["Bytes"]>;
	erc1155TokenAddress_in?: Maybe<Array<Scalars["Bytes"]>>;
	erc1155TokenAddress_not_in?: Maybe<Array<Scalars["Bytes"]>>;
	erc1155TokenAddress_contains?: Maybe<Scalars["Bytes"]>;
	erc1155TokenAddress_not_contains?: Maybe<Scalars["Bytes"]>;
	erc1155TypeId?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_not?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_gt?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_lt?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_gte?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_lte?: Maybe<Scalars["BigInt"]>;
	erc1155TypeId_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc1155TypeId_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	seller?: Maybe<Scalars["Bytes"]>;
	seller_not?: Maybe<Scalars["Bytes"]>;
	seller_in?: Maybe<Array<Scalars["Bytes"]>>;
	seller_not_in?: Maybe<Array<Scalars["Bytes"]>>;
	seller_contains?: Maybe<Scalars["Bytes"]>;
	seller_not_contains?: Maybe<Scalars["Bytes"]>;
	buyer?: Maybe<Scalars["Bytes"]>;
	buyer_not?: Maybe<Scalars["Bytes"]>;
	buyer_in?: Maybe<Array<Scalars["Bytes"]>>;
	buyer_not_in?: Maybe<Array<Scalars["Bytes"]>>;
	buyer_contains?: Maybe<Scalars["Bytes"]>;
	buyer_not_contains?: Maybe<Scalars["Bytes"]>;
	priceInWei?: Maybe<Scalars["BigInt"]>;
	priceInWei_not?: Maybe<Scalars["BigInt"]>;
	priceInWei_gt?: Maybe<Scalars["BigInt"]>;
	priceInWei_lt?: Maybe<Scalars["BigInt"]>;
	priceInWei_gte?: Maybe<Scalars["BigInt"]>;
	priceInWei_lte?: Maybe<Scalars["BigInt"]>;
	priceInWei_in?: Maybe<Array<Scalars["BigInt"]>>;
	priceInWei_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	quantity?: Maybe<Scalars["BigInt"]>;
	quantity_not?: Maybe<Scalars["BigInt"]>;
	quantity_gt?: Maybe<Scalars["BigInt"]>;
	quantity_lt?: Maybe<Scalars["BigInt"]>;
	quantity_gte?: Maybe<Scalars["BigInt"]>;
	quantity_lte?: Maybe<Scalars["BigInt"]>;
	quantity_in?: Maybe<Array<Scalars["BigInt"]>>;
	quantity_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	timeLastPurchased?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_not?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_gt?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_lt?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_gte?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_lte?: Maybe<Scalars["BigInt"]>;
	timeLastPurchased_in?: Maybe<Array<Scalars["BigInt"]>>;
	timeLastPurchased_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	rarityLevel?: Maybe<Scalars["BigInt"]>;
	rarityLevel_not?: Maybe<Scalars["BigInt"]>;
	rarityLevel_gt?: Maybe<Scalars["BigInt"]>;
	rarityLevel_lt?: Maybe<Scalars["BigInt"]>;
	rarityLevel_gte?: Maybe<Scalars["BigInt"]>;
	rarityLevel_lte?: Maybe<Scalars["BigInt"]>;
	rarityLevel_in?: Maybe<Array<Scalars["BigInt"]>>;
	rarityLevel_not_in?: Maybe<Array<Scalars["BigInt"]>>;
};

export enum Erc1155Purchase_OrderBy {
	Id = "id",
	ListingId = "listingID",
	Category = "category",
	Erc1155TokenAddress = "erc1155TokenAddress",
	Erc1155TypeId = "erc1155TypeId",
	Seller = "seller",
	Buyer = "buyer",
	PriceInWei = "priceInWei",
	Quantity = "quantity",
	TimeLastPurchased = "timeLastPurchased",
	RarityLevel = "rarityLevel",
}

export type Erc721Listing = {
	__typename?: "ERC721Listing";
	id: Scalars["ID"];
	category: Scalars["BigInt"];
	erc721TokenAddress: Scalars["Bytes"];
	tokenId: Scalars["BigInt"];
	seller: Scalars["Bytes"];
	buyer?: Maybe<Scalars["Bytes"]>;
	timeCreated: Scalars["BigInt"];
	timePurchased?: Maybe<Scalars["BigInt"]>;
	cancelled?: Maybe<Scalars["Boolean"]>;
	priceInWei: Scalars["BigInt"];
	gotchi?: Maybe<Aavegotchi>;
	portal?: Maybe<Portal>;
	hauntId?: Maybe<Scalars["BigInt"]>;
	kinship?: Maybe<Scalars["BigInt"]>;
	baseRarityScore?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore?: Maybe<Scalars["BigInt"]>;
	equippedWearables?: Maybe<Array<Scalars["Int"]>>;
};

export type Erc721Listing_Filter = {
	id?: Maybe<Scalars["ID"]>;
	id_not?: Maybe<Scalars["ID"]>;
	id_gt?: Maybe<Scalars["ID"]>;
	id_lt?: Maybe<Scalars["ID"]>;
	id_gte?: Maybe<Scalars["ID"]>;
	id_lte?: Maybe<Scalars["ID"]>;
	id_in?: Maybe<Array<Scalars["ID"]>>;
	id_not_in?: Maybe<Array<Scalars["ID"]>>;
	category?: Maybe<Scalars["BigInt"]>;
	category_not?: Maybe<Scalars["BigInt"]>;
	category_gt?: Maybe<Scalars["BigInt"]>;
	category_lt?: Maybe<Scalars["BigInt"]>;
	category_gte?: Maybe<Scalars["BigInt"]>;
	category_lte?: Maybe<Scalars["BigInt"]>;
	category_in?: Maybe<Array<Scalars["BigInt"]>>;
	category_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc721TokenAddress?: Maybe<Scalars["Bytes"]>;
	erc721TokenAddress_not?: Maybe<Scalars["Bytes"]>;
	erc721TokenAddress_in?: Maybe<Array<Scalars["Bytes"]>>;
	erc721TokenAddress_not_in?: Maybe<Array<Scalars["Bytes"]>>;
	erc721TokenAddress_contains?: Maybe<Scalars["Bytes"]>;
	erc721TokenAddress_not_contains?: Maybe<Scalars["Bytes"]>;
	tokenId?: Maybe<Scalars["BigInt"]>;
	tokenId_not?: Maybe<Scalars["BigInt"]>;
	tokenId_gt?: Maybe<Scalars["BigInt"]>;
	tokenId_lt?: Maybe<Scalars["BigInt"]>;
	tokenId_gte?: Maybe<Scalars["BigInt"]>;
	tokenId_lte?: Maybe<Scalars["BigInt"]>;
	tokenId_in?: Maybe<Array<Scalars["BigInt"]>>;
	tokenId_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	seller?: Maybe<Scalars["Bytes"]>;
	seller_not?: Maybe<Scalars["Bytes"]>;
	seller_in?: Maybe<Array<Scalars["Bytes"]>>;
	seller_not_in?: Maybe<Array<Scalars["Bytes"]>>;
	seller_contains?: Maybe<Scalars["Bytes"]>;
	seller_not_contains?: Maybe<Scalars["Bytes"]>;
	buyer?: Maybe<Scalars["Bytes"]>;
	buyer_not?: Maybe<Scalars["Bytes"]>;
	buyer_in?: Maybe<Array<Scalars["Bytes"]>>;
	buyer_not_in?: Maybe<Array<Scalars["Bytes"]>>;
	buyer_contains?: Maybe<Scalars["Bytes"]>;
	buyer_not_contains?: Maybe<Scalars["Bytes"]>;
	timeCreated?: Maybe<Scalars["BigInt"]>;
	timeCreated_not?: Maybe<Scalars["BigInt"]>;
	timeCreated_gt?: Maybe<Scalars["BigInt"]>;
	timeCreated_lt?: Maybe<Scalars["BigInt"]>;
	timeCreated_gte?: Maybe<Scalars["BigInt"]>;
	timeCreated_lte?: Maybe<Scalars["BigInt"]>;
	timeCreated_in?: Maybe<Array<Scalars["BigInt"]>>;
	timeCreated_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	timePurchased?: Maybe<Scalars["BigInt"]>;
	timePurchased_not?: Maybe<Scalars["BigInt"]>;
	timePurchased_gt?: Maybe<Scalars["BigInt"]>;
	timePurchased_lt?: Maybe<Scalars["BigInt"]>;
	timePurchased_gte?: Maybe<Scalars["BigInt"]>;
	timePurchased_lte?: Maybe<Scalars["BigInt"]>;
	timePurchased_in?: Maybe<Array<Scalars["BigInt"]>>;
	timePurchased_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	cancelled?: Maybe<Scalars["Boolean"]>;
	cancelled_not?: Maybe<Scalars["Boolean"]>;
	cancelled_in?: Maybe<Array<Scalars["Boolean"]>>;
	cancelled_not_in?: Maybe<Array<Scalars["Boolean"]>>;
	priceInWei?: Maybe<Scalars["BigInt"]>;
	priceInWei_not?: Maybe<Scalars["BigInt"]>;
	priceInWei_gt?: Maybe<Scalars["BigInt"]>;
	priceInWei_lt?: Maybe<Scalars["BigInt"]>;
	priceInWei_gte?: Maybe<Scalars["BigInt"]>;
	priceInWei_lte?: Maybe<Scalars["BigInt"]>;
	priceInWei_in?: Maybe<Array<Scalars["BigInt"]>>;
	priceInWei_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	gotchi?: Maybe<Scalars["String"]>;
	gotchi_not?: Maybe<Scalars["String"]>;
	gotchi_gt?: Maybe<Scalars["String"]>;
	gotchi_lt?: Maybe<Scalars["String"]>;
	gotchi_gte?: Maybe<Scalars["String"]>;
	gotchi_lte?: Maybe<Scalars["String"]>;
	gotchi_in?: Maybe<Array<Scalars["String"]>>;
	gotchi_not_in?: Maybe<Array<Scalars["String"]>>;
	gotchi_contains?: Maybe<Scalars["String"]>;
	gotchi_not_contains?: Maybe<Scalars["String"]>;
	gotchi_starts_with?: Maybe<Scalars["String"]>;
	gotchi_not_starts_with?: Maybe<Scalars["String"]>;
	gotchi_ends_with?: Maybe<Scalars["String"]>;
	gotchi_not_ends_with?: Maybe<Scalars["String"]>;
	portal?: Maybe<Scalars["String"]>;
	portal_not?: Maybe<Scalars["String"]>;
	portal_gt?: Maybe<Scalars["String"]>;
	portal_lt?: Maybe<Scalars["String"]>;
	portal_gte?: Maybe<Scalars["String"]>;
	portal_lte?: Maybe<Scalars["String"]>;
	portal_in?: Maybe<Array<Scalars["String"]>>;
	portal_not_in?: Maybe<Array<Scalars["String"]>>;
	portal_contains?: Maybe<Scalars["String"]>;
	portal_not_contains?: Maybe<Scalars["String"]>;
	portal_starts_with?: Maybe<Scalars["String"]>;
	portal_not_starts_with?: Maybe<Scalars["String"]>;
	portal_ends_with?: Maybe<Scalars["String"]>;
	portal_not_ends_with?: Maybe<Scalars["String"]>;
	hauntId?: Maybe<Scalars["BigInt"]>;
	hauntId_not?: Maybe<Scalars["BigInt"]>;
	hauntId_gt?: Maybe<Scalars["BigInt"]>;
	hauntId_lt?: Maybe<Scalars["BigInt"]>;
	hauntId_gte?: Maybe<Scalars["BigInt"]>;
	hauntId_lte?: Maybe<Scalars["BigInt"]>;
	hauntId_in?: Maybe<Array<Scalars["BigInt"]>>;
	hauntId_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	kinship?: Maybe<Scalars["BigInt"]>;
	kinship_not?: Maybe<Scalars["BigInt"]>;
	kinship_gt?: Maybe<Scalars["BigInt"]>;
	kinship_lt?: Maybe<Scalars["BigInt"]>;
	kinship_gte?: Maybe<Scalars["BigInt"]>;
	kinship_lte?: Maybe<Scalars["BigInt"]>;
	kinship_in?: Maybe<Array<Scalars["BigInt"]>>;
	kinship_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	baseRarityScore?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_not?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_gt?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_lt?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_gte?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_lte?: Maybe<Scalars["BigInt"]>;
	baseRarityScore_in?: Maybe<Array<Scalars["BigInt"]>>;
	baseRarityScore_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	modifiedRarityScore?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_not?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_gt?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_lt?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_gte?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_lte?: Maybe<Scalars["BigInt"]>;
	modifiedRarityScore_in?: Maybe<Array<Scalars["BigInt"]>>;
	modifiedRarityScore_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	equippedWearables?: Maybe<Array<Scalars["Int"]>>;
	equippedWearables_not?: Maybe<Array<Scalars["Int"]>>;
	equippedWearables_contains?: Maybe<Array<Scalars["Int"]>>;
	equippedWearables_not_contains?: Maybe<Array<Scalars["Int"]>>;
};

export enum Erc721Listing_OrderBy {
	Id = "id",
	Category = "category",
	Erc721TokenAddress = "erc721TokenAddress",
	TokenId = "tokenId",
	Seller = "seller",
	Buyer = "buyer",
	TimeCreated = "timeCreated",
	TimePurchased = "timePurchased",
	Cancelled = "cancelled",
	PriceInWei = "priceInWei",
	Gotchi = "gotchi",
	Portal = "portal",
	HauntId = "hauntId",
	Kinship = "kinship",
	BaseRarityScore = "baseRarityScore",
	ModifiedRarityScore = "modifiedRarityScore",
	EquippedWearables = "equippedWearables",
}

export type ItemType = {
	__typename?: "ItemType";
	id: Scalars["ID"];
	svgId: Scalars["BigInt"];
	name: Scalars["String"];
	desc?: Maybe<Scalars["String"]>;
	author?: Maybe<Scalars["String"]>;
	traitModifiers?: Maybe<Array<Scalars["Int"]>>;
	slotPositions?: Maybe<Array<Scalars["Boolean"]>>;
	ghstPrice: Scalars["BigInt"];
	maxQuantity: Scalars["BigInt"];
	totalQuantity: Scalars["BigInt"];
	rarityScoreModifier: Scalars["Int"];
	canPurchaseWithGhst: Scalars["Boolean"];
	minLevel?: Maybe<Scalars["Int"]>;
	canBeTransferred: Scalars["Boolean"];
	category: Scalars["Int"];
	kinshipBonus?: Maybe<Scalars["Int"]>;
	experienceBonus?: Maybe<Scalars["BigInt"]>;
};

export type ItemType_Filter = {
	id?: Maybe<Scalars["ID"]>;
	id_not?: Maybe<Scalars["ID"]>;
	id_gt?: Maybe<Scalars["ID"]>;
	id_lt?: Maybe<Scalars["ID"]>;
	id_gte?: Maybe<Scalars["ID"]>;
	id_lte?: Maybe<Scalars["ID"]>;
	id_in?: Maybe<Array<Scalars["ID"]>>;
	id_not_in?: Maybe<Array<Scalars["ID"]>>;
	svgId?: Maybe<Scalars["BigInt"]>;
	svgId_not?: Maybe<Scalars["BigInt"]>;
	svgId_gt?: Maybe<Scalars["BigInt"]>;
	svgId_lt?: Maybe<Scalars["BigInt"]>;
	svgId_gte?: Maybe<Scalars["BigInt"]>;
	svgId_lte?: Maybe<Scalars["BigInt"]>;
	svgId_in?: Maybe<Array<Scalars["BigInt"]>>;
	svgId_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	name?: Maybe<Scalars["String"]>;
	name_not?: Maybe<Scalars["String"]>;
	name_gt?: Maybe<Scalars["String"]>;
	name_lt?: Maybe<Scalars["String"]>;
	name_gte?: Maybe<Scalars["String"]>;
	name_lte?: Maybe<Scalars["String"]>;
	name_in?: Maybe<Array<Scalars["String"]>>;
	name_not_in?: Maybe<Array<Scalars["String"]>>;
	name_contains?: Maybe<Scalars["String"]>;
	name_not_contains?: Maybe<Scalars["String"]>;
	name_starts_with?: Maybe<Scalars["String"]>;
	name_not_starts_with?: Maybe<Scalars["String"]>;
	name_ends_with?: Maybe<Scalars["String"]>;
	name_not_ends_with?: Maybe<Scalars["String"]>;
	desc?: Maybe<Scalars["String"]>;
	desc_not?: Maybe<Scalars["String"]>;
	desc_gt?: Maybe<Scalars["String"]>;
	desc_lt?: Maybe<Scalars["String"]>;
	desc_gte?: Maybe<Scalars["String"]>;
	desc_lte?: Maybe<Scalars["String"]>;
	desc_in?: Maybe<Array<Scalars["String"]>>;
	desc_not_in?: Maybe<Array<Scalars["String"]>>;
	desc_contains?: Maybe<Scalars["String"]>;
	desc_not_contains?: Maybe<Scalars["String"]>;
	desc_starts_with?: Maybe<Scalars["String"]>;
	desc_not_starts_with?: Maybe<Scalars["String"]>;
	desc_ends_with?: Maybe<Scalars["String"]>;
	desc_not_ends_with?: Maybe<Scalars["String"]>;
	author?: Maybe<Scalars["String"]>;
	author_not?: Maybe<Scalars["String"]>;
	author_gt?: Maybe<Scalars["String"]>;
	author_lt?: Maybe<Scalars["String"]>;
	author_gte?: Maybe<Scalars["String"]>;
	author_lte?: Maybe<Scalars["String"]>;
	author_in?: Maybe<Array<Scalars["String"]>>;
	author_not_in?: Maybe<Array<Scalars["String"]>>;
	author_contains?: Maybe<Scalars["String"]>;
	author_not_contains?: Maybe<Scalars["String"]>;
	author_starts_with?: Maybe<Scalars["String"]>;
	author_not_starts_with?: Maybe<Scalars["String"]>;
	author_ends_with?: Maybe<Scalars["String"]>;
	author_not_ends_with?: Maybe<Scalars["String"]>;
	traitModifiers?: Maybe<Array<Scalars["Int"]>>;
	traitModifiers_not?: Maybe<Array<Scalars["Int"]>>;
	traitModifiers_contains?: Maybe<Array<Scalars["Int"]>>;
	traitModifiers_not_contains?: Maybe<Array<Scalars["Int"]>>;
	slotPositions?: Maybe<Array<Scalars["Boolean"]>>;
	slotPositions_not?: Maybe<Array<Scalars["Boolean"]>>;
	slotPositions_contains?: Maybe<Array<Scalars["Boolean"]>>;
	slotPositions_not_contains?: Maybe<Array<Scalars["Boolean"]>>;
	ghstPrice?: Maybe<Scalars["BigInt"]>;
	ghstPrice_not?: Maybe<Scalars["BigInt"]>;
	ghstPrice_gt?: Maybe<Scalars["BigInt"]>;
	ghstPrice_lt?: Maybe<Scalars["BigInt"]>;
	ghstPrice_gte?: Maybe<Scalars["BigInt"]>;
	ghstPrice_lte?: Maybe<Scalars["BigInt"]>;
	ghstPrice_in?: Maybe<Array<Scalars["BigInt"]>>;
	ghstPrice_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	maxQuantity?: Maybe<Scalars["BigInt"]>;
	maxQuantity_not?: Maybe<Scalars["BigInt"]>;
	maxQuantity_gt?: Maybe<Scalars["BigInt"]>;
	maxQuantity_lt?: Maybe<Scalars["BigInt"]>;
	maxQuantity_gte?: Maybe<Scalars["BigInt"]>;
	maxQuantity_lte?: Maybe<Scalars["BigInt"]>;
	maxQuantity_in?: Maybe<Array<Scalars["BigInt"]>>;
	maxQuantity_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	totalQuantity?: Maybe<Scalars["BigInt"]>;
	totalQuantity_not?: Maybe<Scalars["BigInt"]>;
	totalQuantity_gt?: Maybe<Scalars["BigInt"]>;
	totalQuantity_lt?: Maybe<Scalars["BigInt"]>;
	totalQuantity_gte?: Maybe<Scalars["BigInt"]>;
	totalQuantity_lte?: Maybe<Scalars["BigInt"]>;
	totalQuantity_in?: Maybe<Array<Scalars["BigInt"]>>;
	totalQuantity_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	rarityScoreModifier?: Maybe<Scalars["Int"]>;
	rarityScoreModifier_not?: Maybe<Scalars["Int"]>;
	rarityScoreModifier_gt?: Maybe<Scalars["Int"]>;
	rarityScoreModifier_lt?: Maybe<Scalars["Int"]>;
	rarityScoreModifier_gte?: Maybe<Scalars["Int"]>;
	rarityScoreModifier_lte?: Maybe<Scalars["Int"]>;
	rarityScoreModifier_in?: Maybe<Array<Scalars["Int"]>>;
	rarityScoreModifier_not_in?: Maybe<Array<Scalars["Int"]>>;
	canPurchaseWithGhst?: Maybe<Scalars["Boolean"]>;
	canPurchaseWithGhst_not?: Maybe<Scalars["Boolean"]>;
	canPurchaseWithGhst_in?: Maybe<Array<Scalars["Boolean"]>>;
	canPurchaseWithGhst_not_in?: Maybe<Array<Scalars["Boolean"]>>;
	minLevel?: Maybe<Scalars["Int"]>;
	minLevel_not?: Maybe<Scalars["Int"]>;
	minLevel_gt?: Maybe<Scalars["Int"]>;
	minLevel_lt?: Maybe<Scalars["Int"]>;
	minLevel_gte?: Maybe<Scalars["Int"]>;
	minLevel_lte?: Maybe<Scalars["Int"]>;
	minLevel_in?: Maybe<Array<Scalars["Int"]>>;
	minLevel_not_in?: Maybe<Array<Scalars["Int"]>>;
	canBeTransferred?: Maybe<Scalars["Boolean"]>;
	canBeTransferred_not?: Maybe<Scalars["Boolean"]>;
	canBeTransferred_in?: Maybe<Array<Scalars["Boolean"]>>;
	canBeTransferred_not_in?: Maybe<Array<Scalars["Boolean"]>>;
	category?: Maybe<Scalars["Int"]>;
	category_not?: Maybe<Scalars["Int"]>;
	category_gt?: Maybe<Scalars["Int"]>;
	category_lt?: Maybe<Scalars["Int"]>;
	category_gte?: Maybe<Scalars["Int"]>;
	category_lte?: Maybe<Scalars["Int"]>;
	category_in?: Maybe<Array<Scalars["Int"]>>;
	category_not_in?: Maybe<Array<Scalars["Int"]>>;
	kinshipBonus?: Maybe<Scalars["Int"]>;
	kinshipBonus_not?: Maybe<Scalars["Int"]>;
	kinshipBonus_gt?: Maybe<Scalars["Int"]>;
	kinshipBonus_lt?: Maybe<Scalars["Int"]>;
	kinshipBonus_gte?: Maybe<Scalars["Int"]>;
	kinshipBonus_lte?: Maybe<Scalars["Int"]>;
	kinshipBonus_in?: Maybe<Array<Scalars["Int"]>>;
	kinshipBonus_not_in?: Maybe<Array<Scalars["Int"]>>;
	experienceBonus?: Maybe<Scalars["BigInt"]>;
	experienceBonus_not?: Maybe<Scalars["BigInt"]>;
	experienceBonus_gt?: Maybe<Scalars["BigInt"]>;
	experienceBonus_lt?: Maybe<Scalars["BigInt"]>;
	experienceBonus_gte?: Maybe<Scalars["BigInt"]>;
	experienceBonus_lte?: Maybe<Scalars["BigInt"]>;
	experienceBonus_in?: Maybe<Array<Scalars["BigInt"]>>;
	experienceBonus_not_in?: Maybe<Array<Scalars["BigInt"]>>;
};

export enum ItemType_OrderBy {
	Id = "id",
	SvgId = "svgId",
	Name = "name",
	Desc = "desc",
	Author = "author",
	TraitModifiers = "traitModifiers",
	SlotPositions = "slotPositions",
	GhstPrice = "ghstPrice",
	MaxQuantity = "maxQuantity",
	TotalQuantity = "totalQuantity",
	RarityScoreModifier = "rarityScoreModifier",
	CanPurchaseWithGhst = "canPurchaseWithGhst",
	MinLevel = "minLevel",
	CanBeTransferred = "canBeTransferred",
	Category = "category",
	KinshipBonus = "kinshipBonus",
	ExperienceBonus = "experienceBonus",
}

export enum OrderDirection {
	Asc = "asc",
	Desc = "desc",
}

export type Portal = {
	__typename?: "Portal";
	id: Scalars["ID"];
	gotchiId?: Maybe<Scalars["BigInt"]>;
	buyer: User;
	hauntId: Scalars["BigInt"];
	owner: User;
	options: Array<AavegotchiOption>;
	gotchi?: Maybe<Aavegotchi>;
	status: PortalStatus;
	boughtAt?: Maybe<Scalars["BigInt"]>;
	openedAt?: Maybe<Scalars["BigInt"]>;
	claimedAt?: Maybe<Scalars["BigInt"]>;
	timesTraded: Scalars["BigInt"];
};

export type PortalOptionsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<AavegotchiOption_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<AavegotchiOption_Filter>;
};

export enum PortalStatus {
	Bought = "Bought",
	Opened = "Opened",
	Claimed = "Claimed",
}

export type Portal_Filter = {
	id?: Maybe<Scalars["ID"]>;
	id_not?: Maybe<Scalars["ID"]>;
	id_gt?: Maybe<Scalars["ID"]>;
	id_lt?: Maybe<Scalars["ID"]>;
	id_gte?: Maybe<Scalars["ID"]>;
	id_lte?: Maybe<Scalars["ID"]>;
	id_in?: Maybe<Array<Scalars["ID"]>>;
	id_not_in?: Maybe<Array<Scalars["ID"]>>;
	gotchiId?: Maybe<Scalars["BigInt"]>;
	gotchiId_not?: Maybe<Scalars["BigInt"]>;
	gotchiId_gt?: Maybe<Scalars["BigInt"]>;
	gotchiId_lt?: Maybe<Scalars["BigInt"]>;
	gotchiId_gte?: Maybe<Scalars["BigInt"]>;
	gotchiId_lte?: Maybe<Scalars["BigInt"]>;
	gotchiId_in?: Maybe<Array<Scalars["BigInt"]>>;
	gotchiId_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	buyer?: Maybe<Scalars["String"]>;
	buyer_not?: Maybe<Scalars["String"]>;
	buyer_gt?: Maybe<Scalars["String"]>;
	buyer_lt?: Maybe<Scalars["String"]>;
	buyer_gte?: Maybe<Scalars["String"]>;
	buyer_lte?: Maybe<Scalars["String"]>;
	buyer_in?: Maybe<Array<Scalars["String"]>>;
	buyer_not_in?: Maybe<Array<Scalars["String"]>>;
	buyer_contains?: Maybe<Scalars["String"]>;
	buyer_not_contains?: Maybe<Scalars["String"]>;
	buyer_starts_with?: Maybe<Scalars["String"]>;
	buyer_not_starts_with?: Maybe<Scalars["String"]>;
	buyer_ends_with?: Maybe<Scalars["String"]>;
	buyer_not_ends_with?: Maybe<Scalars["String"]>;
	hauntId?: Maybe<Scalars["BigInt"]>;
	hauntId_not?: Maybe<Scalars["BigInt"]>;
	hauntId_gt?: Maybe<Scalars["BigInt"]>;
	hauntId_lt?: Maybe<Scalars["BigInt"]>;
	hauntId_gte?: Maybe<Scalars["BigInt"]>;
	hauntId_lte?: Maybe<Scalars["BigInt"]>;
	hauntId_in?: Maybe<Array<Scalars["BigInt"]>>;
	hauntId_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	owner?: Maybe<Scalars["String"]>;
	owner_not?: Maybe<Scalars["String"]>;
	owner_gt?: Maybe<Scalars["String"]>;
	owner_lt?: Maybe<Scalars["String"]>;
	owner_gte?: Maybe<Scalars["String"]>;
	owner_lte?: Maybe<Scalars["String"]>;
	owner_in?: Maybe<Array<Scalars["String"]>>;
	owner_not_in?: Maybe<Array<Scalars["String"]>>;
	owner_contains?: Maybe<Scalars["String"]>;
	owner_not_contains?: Maybe<Scalars["String"]>;
	owner_starts_with?: Maybe<Scalars["String"]>;
	owner_not_starts_with?: Maybe<Scalars["String"]>;
	owner_ends_with?: Maybe<Scalars["String"]>;
	owner_not_ends_with?: Maybe<Scalars["String"]>;
	gotchi?: Maybe<Scalars["String"]>;
	gotchi_not?: Maybe<Scalars["String"]>;
	gotchi_gt?: Maybe<Scalars["String"]>;
	gotchi_lt?: Maybe<Scalars["String"]>;
	gotchi_gte?: Maybe<Scalars["String"]>;
	gotchi_lte?: Maybe<Scalars["String"]>;
	gotchi_in?: Maybe<Array<Scalars["String"]>>;
	gotchi_not_in?: Maybe<Array<Scalars["String"]>>;
	gotchi_contains?: Maybe<Scalars["String"]>;
	gotchi_not_contains?: Maybe<Scalars["String"]>;
	gotchi_starts_with?: Maybe<Scalars["String"]>;
	gotchi_not_starts_with?: Maybe<Scalars["String"]>;
	gotchi_ends_with?: Maybe<Scalars["String"]>;
	gotchi_not_ends_with?: Maybe<Scalars["String"]>;
	status?: Maybe<PortalStatus>;
	status_not?: Maybe<PortalStatus>;
	boughtAt?: Maybe<Scalars["BigInt"]>;
	boughtAt_not?: Maybe<Scalars["BigInt"]>;
	boughtAt_gt?: Maybe<Scalars["BigInt"]>;
	boughtAt_lt?: Maybe<Scalars["BigInt"]>;
	boughtAt_gte?: Maybe<Scalars["BigInt"]>;
	boughtAt_lte?: Maybe<Scalars["BigInt"]>;
	boughtAt_in?: Maybe<Array<Scalars["BigInt"]>>;
	boughtAt_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	openedAt?: Maybe<Scalars["BigInt"]>;
	openedAt_not?: Maybe<Scalars["BigInt"]>;
	openedAt_gt?: Maybe<Scalars["BigInt"]>;
	openedAt_lt?: Maybe<Scalars["BigInt"]>;
	openedAt_gte?: Maybe<Scalars["BigInt"]>;
	openedAt_lte?: Maybe<Scalars["BigInt"]>;
	openedAt_in?: Maybe<Array<Scalars["BigInt"]>>;
	openedAt_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	claimedAt?: Maybe<Scalars["BigInt"]>;
	claimedAt_not?: Maybe<Scalars["BigInt"]>;
	claimedAt_gt?: Maybe<Scalars["BigInt"]>;
	claimedAt_lt?: Maybe<Scalars["BigInt"]>;
	claimedAt_gte?: Maybe<Scalars["BigInt"]>;
	claimedAt_lte?: Maybe<Scalars["BigInt"]>;
	claimedAt_in?: Maybe<Array<Scalars["BigInt"]>>;
	claimedAt_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	timesTraded?: Maybe<Scalars["BigInt"]>;
	timesTraded_not?: Maybe<Scalars["BigInt"]>;
	timesTraded_gt?: Maybe<Scalars["BigInt"]>;
	timesTraded_lt?: Maybe<Scalars["BigInt"]>;
	timesTraded_gte?: Maybe<Scalars["BigInt"]>;
	timesTraded_lte?: Maybe<Scalars["BigInt"]>;
	timesTraded_in?: Maybe<Array<Scalars["BigInt"]>>;
	timesTraded_not_in?: Maybe<Array<Scalars["BigInt"]>>;
};

export enum Portal_OrderBy {
	Id = "id",
	GotchiId = "gotchiId",
	Buyer = "buyer",
	HauntId = "hauntId",
	Owner = "owner",
	Options = "options",
	Gotchi = "gotchi",
	Status = "status",
	BoughtAt = "boughtAt",
	OpenedAt = "openedAt",
	ClaimedAt = "claimedAt",
	TimesTraded = "timesTraded",
}

export type Query = {
	__typename?: "Query";
	aavegotchiOption?: Maybe<AavegotchiOption>;
	aavegotchiOptions: Array<AavegotchiOption>;
	aavegotchi?: Maybe<Aavegotchi>;
	aavegotchis: Array<Aavegotchi>;
	portal?: Maybe<Portal>;
	portals: Array<Portal>;
	user?: Maybe<User>;
	users: Array<User>;
	erc721Listing?: Maybe<Erc721Listing>;
	erc721Listings: Array<Erc721Listing>;
	erc1155Listing?: Maybe<Erc1155Listing>;
	erc1155Listings: Array<Erc1155Listing>;
	erc1155Purchase?: Maybe<Erc1155Purchase>;
	erc1155Purchases: Array<Erc1155Purchase>;
	statistic?: Maybe<Statistic>;
	statistics: Array<Statistic>;
	itemType?: Maybe<ItemType>;
	itemTypes: Array<ItemType>;
	wearableSet?: Maybe<WearableSet>;
	wearableSets: Array<WearableSet>;
	/** Access to subgraph metadata */
	_meta?: Maybe<_Meta_>;
};

export type QueryAavegotchiOptionArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type QueryAavegotchiOptionsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<AavegotchiOption_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<AavegotchiOption_Filter>;
	block?: Maybe<Block_Height>;
};

export type QueryAavegotchiArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type QueryAavegotchisArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Aavegotchi_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Aavegotchi_Filter>;
	block?: Maybe<Block_Height>;
};

export type QueryPortalArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type QueryPortalsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Portal_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Portal_Filter>;
	block?: Maybe<Block_Height>;
};

export type QueryUserArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type QueryUsersArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<User_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<User_Filter>;
	block?: Maybe<Block_Height>;
};

export type QueryErc721ListingArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type QueryErc721ListingsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Erc721Listing_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Erc721Listing_Filter>;
	block?: Maybe<Block_Height>;
};

export type QueryErc1155ListingArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type QueryErc1155ListingsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Erc1155Listing_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Erc1155Listing_Filter>;
	block?: Maybe<Block_Height>;
};

export type QueryErc1155PurchaseArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type QueryErc1155PurchasesArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Erc1155Purchase_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Erc1155Purchase_Filter>;
	block?: Maybe<Block_Height>;
};

export type QueryStatisticArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type QueryStatisticsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Statistic_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Statistic_Filter>;
	block?: Maybe<Block_Height>;
};

export type QueryItemTypeArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type QueryItemTypesArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<ItemType_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<ItemType_Filter>;
	block?: Maybe<Block_Height>;
};

export type QueryWearableSetArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type QueryWearableSetsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<WearableSet_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<WearableSet_Filter>;
	block?: Maybe<Block_Height>;
};

export type Query_MetaArgs = {
	block?: Maybe<Block_Height>;
};

export type Statistic = {
	__typename?: "Statistic";
	/** There will be a single Statistic entity with id = '0' */
	id: Scalars["ID"];
	/** Total amount of portals that have been bought. */
	portalsBought: Scalars["BigInt"];
	/** Total amount of portals that have been opened */
	portalsOpened: Scalars["BigInt"];
	/** Total amount of Aavegotchis claimed */
	aavegotchisClaimed: Scalars["BigInt"];
	erc721ActiveListingCount: Scalars["BigInt"];
	erc1155ActiveListingCount: Scalars["BigInt"];
	erc721TotalVolume: Scalars["BigInt"];
	erc1155TotalVolume: Scalars["BigInt"];
	totalWearablesVolume: Scalars["BigInt"];
	totalConsumablesVolume: Scalars["BigInt"];
	totalTicketsVolume: Scalars["BigInt"];
};

export type Statistic_Filter = {
	id?: Maybe<Scalars["ID"]>;
	id_not?: Maybe<Scalars["ID"]>;
	id_gt?: Maybe<Scalars["ID"]>;
	id_lt?: Maybe<Scalars["ID"]>;
	id_gte?: Maybe<Scalars["ID"]>;
	id_lte?: Maybe<Scalars["ID"]>;
	id_in?: Maybe<Array<Scalars["ID"]>>;
	id_not_in?: Maybe<Array<Scalars["ID"]>>;
	portalsBought?: Maybe<Scalars["BigInt"]>;
	portalsBought_not?: Maybe<Scalars["BigInt"]>;
	portalsBought_gt?: Maybe<Scalars["BigInt"]>;
	portalsBought_lt?: Maybe<Scalars["BigInt"]>;
	portalsBought_gte?: Maybe<Scalars["BigInt"]>;
	portalsBought_lte?: Maybe<Scalars["BigInt"]>;
	portalsBought_in?: Maybe<Array<Scalars["BigInt"]>>;
	portalsBought_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	portalsOpened?: Maybe<Scalars["BigInt"]>;
	portalsOpened_not?: Maybe<Scalars["BigInt"]>;
	portalsOpened_gt?: Maybe<Scalars["BigInt"]>;
	portalsOpened_lt?: Maybe<Scalars["BigInt"]>;
	portalsOpened_gte?: Maybe<Scalars["BigInt"]>;
	portalsOpened_lte?: Maybe<Scalars["BigInt"]>;
	portalsOpened_in?: Maybe<Array<Scalars["BigInt"]>>;
	portalsOpened_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	aavegotchisClaimed?: Maybe<Scalars["BigInt"]>;
	aavegotchisClaimed_not?: Maybe<Scalars["BigInt"]>;
	aavegotchisClaimed_gt?: Maybe<Scalars["BigInt"]>;
	aavegotchisClaimed_lt?: Maybe<Scalars["BigInt"]>;
	aavegotchisClaimed_gte?: Maybe<Scalars["BigInt"]>;
	aavegotchisClaimed_lte?: Maybe<Scalars["BigInt"]>;
	aavegotchisClaimed_in?: Maybe<Array<Scalars["BigInt"]>>;
	aavegotchisClaimed_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc721ActiveListingCount?: Maybe<Scalars["BigInt"]>;
	erc721ActiveListingCount_not?: Maybe<Scalars["BigInt"]>;
	erc721ActiveListingCount_gt?: Maybe<Scalars["BigInt"]>;
	erc721ActiveListingCount_lt?: Maybe<Scalars["BigInt"]>;
	erc721ActiveListingCount_gte?: Maybe<Scalars["BigInt"]>;
	erc721ActiveListingCount_lte?: Maybe<Scalars["BigInt"]>;
	erc721ActiveListingCount_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc721ActiveListingCount_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc1155ActiveListingCount?: Maybe<Scalars["BigInt"]>;
	erc1155ActiveListingCount_not?: Maybe<Scalars["BigInt"]>;
	erc1155ActiveListingCount_gt?: Maybe<Scalars["BigInt"]>;
	erc1155ActiveListingCount_lt?: Maybe<Scalars["BigInt"]>;
	erc1155ActiveListingCount_gte?: Maybe<Scalars["BigInt"]>;
	erc1155ActiveListingCount_lte?: Maybe<Scalars["BigInt"]>;
	erc1155ActiveListingCount_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc1155ActiveListingCount_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc721TotalVolume?: Maybe<Scalars["BigInt"]>;
	erc721TotalVolume_not?: Maybe<Scalars["BigInt"]>;
	erc721TotalVolume_gt?: Maybe<Scalars["BigInt"]>;
	erc721TotalVolume_lt?: Maybe<Scalars["BigInt"]>;
	erc721TotalVolume_gte?: Maybe<Scalars["BigInt"]>;
	erc721TotalVolume_lte?: Maybe<Scalars["BigInt"]>;
	erc721TotalVolume_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc721TotalVolume_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc1155TotalVolume?: Maybe<Scalars["BigInt"]>;
	erc1155TotalVolume_not?: Maybe<Scalars["BigInt"]>;
	erc1155TotalVolume_gt?: Maybe<Scalars["BigInt"]>;
	erc1155TotalVolume_lt?: Maybe<Scalars["BigInt"]>;
	erc1155TotalVolume_gte?: Maybe<Scalars["BigInt"]>;
	erc1155TotalVolume_lte?: Maybe<Scalars["BigInt"]>;
	erc1155TotalVolume_in?: Maybe<Array<Scalars["BigInt"]>>;
	erc1155TotalVolume_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	totalWearablesVolume?: Maybe<Scalars["BigInt"]>;
	totalWearablesVolume_not?: Maybe<Scalars["BigInt"]>;
	totalWearablesVolume_gt?: Maybe<Scalars["BigInt"]>;
	totalWearablesVolume_lt?: Maybe<Scalars["BigInt"]>;
	totalWearablesVolume_gte?: Maybe<Scalars["BigInt"]>;
	totalWearablesVolume_lte?: Maybe<Scalars["BigInt"]>;
	totalWearablesVolume_in?: Maybe<Array<Scalars["BigInt"]>>;
	totalWearablesVolume_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	totalConsumablesVolume?: Maybe<Scalars["BigInt"]>;
	totalConsumablesVolume_not?: Maybe<Scalars["BigInt"]>;
	totalConsumablesVolume_gt?: Maybe<Scalars["BigInt"]>;
	totalConsumablesVolume_lt?: Maybe<Scalars["BigInt"]>;
	totalConsumablesVolume_gte?: Maybe<Scalars["BigInt"]>;
	totalConsumablesVolume_lte?: Maybe<Scalars["BigInt"]>;
	totalConsumablesVolume_in?: Maybe<Array<Scalars["BigInt"]>>;
	totalConsumablesVolume_not_in?: Maybe<Array<Scalars["BigInt"]>>;
	totalTicketsVolume?: Maybe<Scalars["BigInt"]>;
	totalTicketsVolume_not?: Maybe<Scalars["BigInt"]>;
	totalTicketsVolume_gt?: Maybe<Scalars["BigInt"]>;
	totalTicketsVolume_lt?: Maybe<Scalars["BigInt"]>;
	totalTicketsVolume_gte?: Maybe<Scalars["BigInt"]>;
	totalTicketsVolume_lte?: Maybe<Scalars["BigInt"]>;
	totalTicketsVolume_in?: Maybe<Array<Scalars["BigInt"]>>;
	totalTicketsVolume_not_in?: Maybe<Array<Scalars["BigInt"]>>;
};

export enum Statistic_OrderBy {
	Id = "id",
	PortalsBought = "portalsBought",
	PortalsOpened = "portalsOpened",
	AavegotchisClaimed = "aavegotchisClaimed",
	Erc721ActiveListingCount = "erc721ActiveListingCount",
	Erc1155ActiveListingCount = "erc1155ActiveListingCount",
	Erc721TotalVolume = "erc721TotalVolume",
	Erc1155TotalVolume = "erc1155TotalVolume",
	TotalWearablesVolume = "totalWearablesVolume",
	TotalConsumablesVolume = "totalConsumablesVolume",
	TotalTicketsVolume = "totalTicketsVolume",
}

export type Subscription = {
	__typename?: "Subscription";
	aavegotchiOption?: Maybe<AavegotchiOption>;
	aavegotchiOptions: Array<AavegotchiOption>;
	aavegotchi?: Maybe<Aavegotchi>;
	aavegotchis: Array<Aavegotchi>;
	portal?: Maybe<Portal>;
	portals: Array<Portal>;
	user?: Maybe<User>;
	users: Array<User>;
	erc721Listing?: Maybe<Erc721Listing>;
	erc721Listings: Array<Erc721Listing>;
	erc1155Listing?: Maybe<Erc1155Listing>;
	erc1155Listings: Array<Erc1155Listing>;
	erc1155Purchase?: Maybe<Erc1155Purchase>;
	erc1155Purchases: Array<Erc1155Purchase>;
	statistic?: Maybe<Statistic>;
	statistics: Array<Statistic>;
	itemType?: Maybe<ItemType>;
	itemTypes: Array<ItemType>;
	wearableSet?: Maybe<WearableSet>;
	wearableSets: Array<WearableSet>;
	/** Access to subgraph metadata */
	_meta?: Maybe<_Meta_>;
};

export type SubscriptionAavegotchiOptionArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type SubscriptionAavegotchiOptionsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<AavegotchiOption_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<AavegotchiOption_Filter>;
	block?: Maybe<Block_Height>;
};

export type SubscriptionAavegotchiArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type SubscriptionAavegotchisArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Aavegotchi_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Aavegotchi_Filter>;
	block?: Maybe<Block_Height>;
};

export type SubscriptionPortalArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type SubscriptionPortalsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Portal_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Portal_Filter>;
	block?: Maybe<Block_Height>;
};

export type SubscriptionUserArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type SubscriptionUsersArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<User_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<User_Filter>;
	block?: Maybe<Block_Height>;
};

export type SubscriptionErc721ListingArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type SubscriptionErc721ListingsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Erc721Listing_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Erc721Listing_Filter>;
	block?: Maybe<Block_Height>;
};

export type SubscriptionErc1155ListingArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type SubscriptionErc1155ListingsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Erc1155Listing_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Erc1155Listing_Filter>;
	block?: Maybe<Block_Height>;
};

export type SubscriptionErc1155PurchaseArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type SubscriptionErc1155PurchasesArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Erc1155Purchase_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Erc1155Purchase_Filter>;
	block?: Maybe<Block_Height>;
};

export type SubscriptionStatisticArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type SubscriptionStatisticsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Statistic_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Statistic_Filter>;
	block?: Maybe<Block_Height>;
};

export type SubscriptionItemTypeArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type SubscriptionItemTypesArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<ItemType_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<ItemType_Filter>;
	block?: Maybe<Block_Height>;
};

export type SubscriptionWearableSetArgs = {
	id: Scalars["ID"];
	block?: Maybe<Block_Height>;
};

export type SubscriptionWearableSetsArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<WearableSet_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<WearableSet_Filter>;
	block?: Maybe<Block_Height>;
};

export type Subscription_MetaArgs = {
	block?: Maybe<Block_Height>;
};

export type User = {
	__typename?: "User";
	id: Scalars["ID"];
	portalsBought: Array<Portal>;
	gotchisOwned: Array<Aavegotchi>;
	portalsOwned: Array<Portal>;
};

export type UserPortalsBoughtArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Portal_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Portal_Filter>;
};

export type UserGotchisOwnedArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Aavegotchi_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Aavegotchi_Filter>;
};

export type UserPortalsOwnedArgs = {
	skip?: Maybe<Scalars["Int"]>;
	first?: Maybe<Scalars["Int"]>;
	orderBy?: Maybe<Portal_OrderBy>;
	orderDirection?: Maybe<OrderDirection>;
	where?: Maybe<Portal_Filter>;
};

export type User_Filter = {
	id?: Maybe<Scalars["ID"]>;
	id_not?: Maybe<Scalars["ID"]>;
	id_gt?: Maybe<Scalars["ID"]>;
	id_lt?: Maybe<Scalars["ID"]>;
	id_gte?: Maybe<Scalars["ID"]>;
	id_lte?: Maybe<Scalars["ID"]>;
	id_in?: Maybe<Array<Scalars["ID"]>>;
	id_not_in?: Maybe<Array<Scalars["ID"]>>;
};

export enum User_OrderBy {
	Id = "id",
	PortalsBought = "portalsBought",
	GotchisOwned = "gotchisOwned",
	PortalsOwned = "portalsOwned",
}

export type WearableSet = {
	__typename?: "WearableSet";
	id: Scalars["ID"];
	name: Scalars["String"];
	allowedCollaterals?: Maybe<Array<Scalars["Int"]>>;
	wearableIds?: Maybe<Array<Scalars["Int"]>>;
	traitBonuses?: Maybe<Array<Scalars["Int"]>>;
};

export type WearableSet_Filter = {
	id?: Maybe<Scalars["ID"]>;
	id_not?: Maybe<Scalars["ID"]>;
	id_gt?: Maybe<Scalars["ID"]>;
	id_lt?: Maybe<Scalars["ID"]>;
	id_gte?: Maybe<Scalars["ID"]>;
	id_lte?: Maybe<Scalars["ID"]>;
	id_in?: Maybe<Array<Scalars["ID"]>>;
	id_not_in?: Maybe<Array<Scalars["ID"]>>;
	name?: Maybe<Scalars["String"]>;
	name_not?: Maybe<Scalars["String"]>;
	name_gt?: Maybe<Scalars["String"]>;
	name_lt?: Maybe<Scalars["String"]>;
	name_gte?: Maybe<Scalars["String"]>;
	name_lte?: Maybe<Scalars["String"]>;
	name_in?: Maybe<Array<Scalars["String"]>>;
	name_not_in?: Maybe<Array<Scalars["String"]>>;
	name_contains?: Maybe<Scalars["String"]>;
	name_not_contains?: Maybe<Scalars["String"]>;
	name_starts_with?: Maybe<Scalars["String"]>;
	name_not_starts_with?: Maybe<Scalars["String"]>;
	name_ends_with?: Maybe<Scalars["String"]>;
	name_not_ends_with?: Maybe<Scalars["String"]>;
	allowedCollaterals?: Maybe<Array<Scalars["Int"]>>;
	allowedCollaterals_not?: Maybe<Array<Scalars["Int"]>>;
	allowedCollaterals_contains?: Maybe<Array<Scalars["Int"]>>;
	allowedCollaterals_not_contains?: Maybe<Array<Scalars["Int"]>>;
	wearableIds?: Maybe<Array<Scalars["Int"]>>;
	wearableIds_not?: Maybe<Array<Scalars["Int"]>>;
	wearableIds_contains?: Maybe<Array<Scalars["Int"]>>;
	wearableIds_not_contains?: Maybe<Array<Scalars["Int"]>>;
	traitBonuses?: Maybe<Array<Scalars["Int"]>>;
	traitBonuses_not?: Maybe<Array<Scalars["Int"]>>;
	traitBonuses_contains?: Maybe<Array<Scalars["Int"]>>;
	traitBonuses_not_contains?: Maybe<Array<Scalars["Int"]>>;
};

export enum WearableSet_OrderBy {
	Id = "id",
	Name = "name",
	AllowedCollaterals = "allowedCollaterals",
	WearableIds = "wearableIds",
	TraitBonuses = "traitBonuses",
}

export type _Block_ = {
	__typename?: "_Block_";
	/** The hash of the block */
	hash?: Maybe<Scalars["Bytes"]>;
	/** The block number */
	number: Scalars["Int"];
};

/** The type for the top-level _meta field */
export type _Meta_ = {
	__typename?: "_Meta_";
	/**
	 * Information about a specific subgraph block. The hash of the block
	 * will be null if the _meta field has a block constraint that asks for
	 * a block number. It will be filled if the _meta field has no block constraint
	 * and therefore asks for the latest  block
	 */
	block: _Block_;
	/** The deployment ID */
	deployment: Scalars["String"];
	/** If `true`, the subgraph encountered indexing errors at some past block */
	hasIndexingErrors: Scalars["Boolean"];
};

export enum _SubgraphErrorPolicy_ {
	/** Data will be returned even if the subgraph has indexing errors */
	Allow = "allow",
	/** If the subgraph has indexing errors, data will be omitted. The default. */
	Deny = "deny",
}

export type GetAavegotchisQueryVariables = Exact<{ [key: string]: never }>;

export type GetAavegotchisQuery = { __typename?: "Query" } & {
	aavegotchis: Array<{ __typename?: "Aavegotchi" } & Aavegotchi>;
};

export const GetAavegotchisDocument = gql`
	query getAavegotchis {
		aavegotchis(first: 100, orderBy: gotchiId) {
			id
			name
			collateral
			withSetsNumericTraits
		}
	}
`;

/**
 * __useGetAavegotchisQuery__
 *
 * To run a query within a React component, call `useGetAavegotchisQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAavegotchisQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAavegotchisQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAavegotchisQuery(
	baseOptions?: Apollo.QueryHookOptions<
		GetAavegotchisQuery,
		GetAavegotchisQueryVariables
	>,
) {
	return Apollo.useQuery<GetAavegotchisQuery, GetAavegotchisQueryVariables>(
		GetAavegotchisDocument,
		baseOptions,
	);
}
export function useGetAavegotchisLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<
		GetAavegotchisQuery,
		GetAavegotchisQueryVariables
	>,
) {
	return Apollo.useLazyQuery<GetAavegotchisQuery, GetAavegotchisQueryVariables>(
		GetAavegotchisDocument,
		baseOptions,
	);
}
export type GetAavegotchisQueryHookResult = ReturnType<
	typeof useGetAavegotchisQuery
>;
export type GetAavegotchisLazyQueryHookResult = ReturnType<
	typeof useGetAavegotchisLazyQuery
>;
export type GetAavegotchisQueryResult = Apollo.QueryResult<
	GetAavegotchisQuery,
	GetAavegotchisQueryVariables
>;

export type IntrospectionResultData = {
	__schema: {
		types: [];
	};
};
const result: IntrospectionResultData = {
	__schema: {
		types: [],
	},
};
export default result;
