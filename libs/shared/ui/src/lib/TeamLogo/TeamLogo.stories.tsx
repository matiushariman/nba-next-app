import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { TeamLogo } from './TeamLogo';

const Story: ComponentMeta<typeof TeamLogo> = {
  component: TeamLogo,
  title: 'TeamLogo',
};
export default Story;

const Template: ComponentStory<typeof TeamLogo> = (args) => (
  <TeamLogo {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  id: '1610612738',
  name: 'Boston Celtics',
  width: 52,
  height: 52,
};
