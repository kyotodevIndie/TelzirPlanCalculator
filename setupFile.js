// setupFile.js - this will run before the tests in jest.
import { setGlobalConfig } from '@storybook/testing-react';
// path of your preview.js file
import * as globalStorybookConfig from './.storybook/preview';

setGlobalConfig(globalStorybookConfig);
