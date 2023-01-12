import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';

const Story: ComponentMeta<typeof Header> = {
  component: Header,
  title: 'Header',
};
export default Story;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Basic = Template.bind({});
Basic.args = {};
