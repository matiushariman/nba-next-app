import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TeamName } from './TeamName';

const Story: ComponentMeta<typeof TeamName> = {
  component: TeamName,
  title: 'blocks/TeamName',
};
export default Story;

const Template: ComponentStory<typeof TeamName> = (args) => (
  <TeamName {...args} />
);

export const Default = Template.bind({});
Default.args = {
  teamId: '1610612738',
  teamName: 'Boston Celtics',
  teamAbbr: 'BOS',
};
