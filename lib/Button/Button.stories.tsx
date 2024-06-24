import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta: Meta<typeof Button> = {
	component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
	args: {
		children: 'Click me!',
		variant:'default',
		size:'default'
	}
}

export const Emoji: Story = {
	args: {
		children: '😅',
		variant:'destructive',
		size:'lg'
	}
}

export const SimpleButton: Story = {
	args: {
		children: 'Simple Button',
		variant:'ghost',
		size:'sm'
	}
}

