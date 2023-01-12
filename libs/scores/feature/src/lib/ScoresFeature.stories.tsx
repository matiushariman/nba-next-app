import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { ScoresFeature } from './ScoresFeature';

const Story: ComponentMeta<typeof ScoresFeature> = {
  component: ScoresFeature,
  title: 'ScoresFeature',
};
export default Story;

const Template: ComponentStory<typeof ScoresFeature> = (args) => (
  <ScoresFeature {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
