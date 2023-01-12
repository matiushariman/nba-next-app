import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Scoreboard } from './Scoreboard';

const Story: ComponentMeta<typeof Scoreboard> = {
  component: Scoreboard,
  title: 'Scoreboard',
};
export default Story;

const Template: ComponentStory<typeof Scoreboard> = (args) => (
  <Scoreboard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
