import React from 'react'
import { boolean, number, select, text, withKnobs } from '@storybook/addon-knobs'
import * as faker from 'faker'

import { Text, u128 } from '@polkadot/types'

import { Actor } from "@joystream/types/roles"
import { Opening } from "@joystream/types/hiring"
import { OpeningView, stateMarkup } from "./Opportunities"

import { OpeningStageClassification, OpeningState } from "../classifiers"

import 'semantic-ui-css/semantic.min.css'
import '@polkadot/joy-roles/index.sass'

export default { 
	title: 'Roles / Components / Opportunities groups tab',
	decorators: [withKnobs],
	excludeStories: ['yesterday', 'opening', 'creator', 'stateOptions'],
}

export function yesterday(): Date {
	const d = new Date()
	d.setDate(d.getDate() - 1)
	return d
}

function newMockHumanReadableText(obj: any) {
	return new Text(JSON.stringify(obj))
}

export const opening = new Opening({
	human_readable_text: newMockHumanReadableText({
		version: 1,
		headline: text("Headline", "Help us curate awesome content", "Role"),
		job: {
			title: text("Job title", "Content curator", "Role"),
			description: text("Job description", faker.lorem.paragraphs(4), "Role")
		},
		reward: text("Reward", "10 JOY per block", "Role"),
		creator: {
			membership: {
				handle: text("Creator handle", "ben", "Role")
			}
		},
		process: {
			details: [
				"A"
			]
		}
	}),
})

export const creator = {
	actor: new Actor({member_id: 1, account: '5HZ6GtaeyxagLynPryM7ZnmLzoWFePKuDrkb4AT8rT4pU1fp'}),
	profile: { 
		handle: new Text(text("Handle","benholdencrowther", "Creator")),
	},
	title: text('Title', 'Group lead', "Creator"),
	lead: boolean('Lead member', true, "Creator"),
	stake: new u128(number('Stake', 10, {}, "Creator")),
}

const stateOptions:any = function() {
	const options:any = {}
	stateMarkup.forEach( (value, key) => {
		options[value.description] = key
	})
	return options
}()

export function OpenStakelessUnrestricted(){
	console.log(stateOptions)
	const stage:OpeningStageClassification = {
		uri: text("URL (to copy)", "https://some.url/#1", "Opening"),
		state: select("State", stateOptions, OpeningState.AcceptingApplications, "Opening"),
		starting_block: number("Created block", 2956498, {}, "Opening"),
		starting_block_hash: "somehash",
		created_time: yesterday(),
	}

	return (
		<OpeningView opening={opening} creator={creator} stage={stage} />
	)
}	