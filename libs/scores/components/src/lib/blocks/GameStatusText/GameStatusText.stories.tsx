import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { GameStatusText } from './GameStatusText';

const Story: ComponentMeta<typeof GameStatusText> = {
  component: GameStatusText,
  title: 'blocks/GameStatusText',
};
export default Story;

const Template: ComponentStory<typeof GameStatusText> = (args) => (
  <GameStatusText {...args} />
);

export const Pregame = Template.bind({});
Pregame.args = {
  statusDesc: 'string',
  status: '1',
  dateTimeEt: '2022-12-29T19:00',
  period: '',
  periodClock: '',
};

export const Midgame = Template.bind({});
Midgame.args = {
  statusDesc: 'string',
  status: '2',
  dateTimeEt: '2022-12-29T19:00',
  period: '1',
  periodClock: '12:00',
};

export const Postgame = Template.bind({});
Postgame.args = {
  statusDesc: 'FINAL',
  status: '3',
  dateTimeEt: '2022-12-29T19:00',
  period: '1',
  periodClock: '12:00',
};
