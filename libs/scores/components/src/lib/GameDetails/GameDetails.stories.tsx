import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { GameDetails } from './GameDetails';

const Story: ComponentMeta<typeof GameDetails> = {
  component: GameDetails,
  title: 'GameDetails',
};
export default Story;

const Template: ComponentStory<typeof GameDetails> = (args) => (
  <GameDetails {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
