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

export const PreGame = Template.bind({});
PreGame.args = {
  statusDesc: '',
  status: '1',
  dateTimeEt: '2022-12-29T19:00',
  period: '1',
  periodClock: '',
  awayTeam: {
    teamId: '1610612740',
    teamName: 'Pelicans',
    teamAbbr: 'NOP',
    score: 0,
    teamRecord: '25-17',
  },
  homeTeam: {
    teamId: '1610612738',
    teamName: 'Celtics',
    teamAbbr: 'BOS',
    score: 0,
    teamRecord: '30-12',
  },
};

export const MidGame = Template.bind({});
MidGame.args = {
  statusDesc: '',
  status: '2',
  dateTimeEt: '2022-12-29T19:00',
  period: '1',
  periodClock: '12:00',
  awayTeam: {
    teamId: '1610612740',
    teamName: 'Pelicans',
    teamAbbr: 'NOP',
    score: 0,
    teamRecord: '25-17',
  },
  homeTeam: {
    teamId: '1610612738',
    teamName: 'Celtics',
    teamAbbr: 'BOS',
    score: 0,
    teamRecord: '30-12',
  },
};

export const PostGame = Template.bind({});
PostGame.args = {
  statusDesc: 'FINAL',
  status: '3',
  dateTimeEt: '2022-12-29T19:00',
  period: '4',
  periodClock: '12:00',
  awayTeam: {
    teamId: '1610612740',
    teamName: 'Pelicans',
    teamAbbr: 'NOP',
    score: 114,
    teamRecord: '25-17',
  },
  homeTeam: {
    teamId: '1610612738',
    teamName: 'Celtics',
    teamAbbr: 'BOS',
    score: 125,
    teamRecord: '30-12',
  },
};
