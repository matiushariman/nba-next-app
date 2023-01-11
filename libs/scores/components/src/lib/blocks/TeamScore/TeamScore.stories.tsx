import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TeamScore } from './TeamScore';

const Story: ComponentMeta<typeof TeamScore> = {
  component: TeamScore,
  title: 'blocks/TeamScore',
};
export default Story;

const Template: ComponentStory<typeof TeamScore> = (args) => (
  <TeamScore {...args} />
);

export const Default = Template.bind({});
Default.args = {
  score: 100,
  isWinner: false,
};

export const Winner = Template.bind({});
Winner.args = {
  score: 100,
  isWinner: true,
};
