import {combineReducers} from 'redux';
import {levelReducers} from './levelReducers';
import {storyReducers} from './StoryReducers';

const reducers = combineReducers({
  level: levelReducers,
  story: storyReducers,
});

export default reducers;
