import React from 'react';
import AdaptiveCard from './AdaptiveCard';

export default {
  title: 'Messaging/AdaptiveCard',
  component: AdaptiveCard,
};

const Template = (args) => <AdaptiveCard {...args} />;
const exampleAdaptiveCard = {
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
  type: 'AdaptiveCard',
  version: '1.2',
  body: [
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          items: [
            {
              type: 'Image',
              style: 'Person',
              url: 'https://developer.webex.com/images/webex-teams-logo.png',
              size: 'Medium',
              height: '50px',
            },
          ],
          width: 'auto',
        },
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: 'Cisco Webex Teams',
              weight: 'Lighter',
              color: 'Accent',
            },
            {
              type: 'TextBlock',
              weight: 'Bolder',
              text: 'Buttons and Cards Release',
              horizontalAlignment: 'Left',
              wrap: true,
              color: 'Light',
              size: 'Large',
              spacing: 'Small',
            },
          ],
          width: 'stretch',
        },
      ],
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          width: 35,
          items: [
            {
              type: 'TextBlock',
              text: 'Release Date:',
              color: 'Light',
            },
            {
              type: 'TextBlock',
              text: 'Product:',
              weight: 'Lighter',
              color: 'Light',
              spacing: 'Small',
            },
            {
              type: 'TextBlock',
              text: 'OS:',
              weight: 'Lighter',
              color: 'Light',
              spacing: 'Small',
            },
          ],
        },
        {
          type: 'Column',
          width: 65,
          items: [
            {
              type: 'TextBlock',
              text: 'Aug 6, 2019',
              color: 'Light',
            },
            {
              type: 'TextBlock',
              text: 'Webex Teams',
              color: 'Light',
              weight: 'Lighter',
              spacing: 'Small',
            },
            {
              type: 'TextBlock',
              text: 'Mac, Windows, Web',
              weight: 'Lighter',
              color: 'Light',
              spacing: 'Small',
            },
          ],
        },
      ],
      spacing: 'Padding',
      horizontalAlignment: 'Center',
    },
    {
      type: 'TextBlock',
      text: 'We\'re making it easier for you to interact with bots and integrations in Webex Teams. When your bot sends information in a space that includes a card with buttons, you can now easily interact with it.',
      wrap: true,
    },
    {
      type: 'TextBlock',
      text: 'Buttons and Cards Resources:',
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          width: 'auto',
          items: [
            {
              type: 'Image',
              altText: '',
              url: 'https://developer.webex.com/images/link-icon.png',
              size: 'Small',
              width: '30px',
            },
          ],
          spacing: 'Small',
        },
        {
          type: 'Column',
          width: 'auto',
          items: [
            {
              type: 'TextBlock',
              text: '[Developer Portal Buttons and Cards Guide]()',
              horizontalAlignment: 'Left',
              size: 'Medium',
            },
          ],
          verticalContentAlignment: 'Center',
          horizontalAlignment: 'Left',
          spacing: 'Small',
        },
      ],
    },
    {
      type: 'ActionSet',
      actions: [
        {
          type: 'Action.Submit',
          title: 'Subscribe to Release Notes',
          data: {
            subscribe: true,
          },
        },
      ],
      horizontalAlignment: 'Left',
      spacing: 'None',
    },
  ],
};

const exampleTextBlock = {
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
  type: 'AdaptiveCard',
  version: '1.2',
  body: [
    {
      type: 'TextBlock',
      text: 'color: default',
      color: 'default',
    },
    {
      type: 'TextBlock',
      text: 'color: accent',
      color: 'accent',
    },
    {
      type: 'TextBlock',
      text: 'color: good',
      color: 'good',
    },
    {
      type: 'TextBlock',
      text: 'color: warning',
      color: 'warning',
    },
    {
      type: 'TextBlock',
      text: 'color: attention',
      color: 'attention',
    },
    {
      type: 'TextBlock',
      text: 'color: light',
      color: 'light',
    },
    {
      type: 'TextBlock',
      text: 'color: dark',
      color: 'dark',
    },
    {
      type: 'TextBlock',
      text: 'Font type not set.',
    },
    {
      type: 'TextBlock',
      text: 'Font type set to *default*.',
      fontType: 'default',
    },
    {
      type: 'TextBlock',
      text: 'Font type set to *monospace*.',
      fontType: 'monospace',
    },
    {
      type: 'TextBlock',
      text: '**horizontalAlignment:left**',
      horizontalAlignment: 'left',
    },
    {
      type: 'TextBlock',
      text: '**horizontalAlignment:center**',
      horizontalAlignment: 'center',
    },
    {
      type: 'TextBlock',
      text: '**horizontalAlignment:right**',
      horizontalAlignment: 'right',
    },
    {
      type: 'TextBlock',
      text: 'isSubtle:false',
      isSubtle: false,
    },
    {
      type: 'TextBlock',
      text: 'isSubtle:true',
      isSubtle: true,
    },
    {
      type: 'TextBlock',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      wrap: true,
      maxLines: 1,
    },
    {
      type: 'TextBlock',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      wrap: true,
      maxLines: 2,
    },
    {
      type: 'TextBlock',
      text: 'size:default',
    },
    {
      type: 'TextBlock',
      text: 'size:small',
      size: 'small',
    },
    {
      type: 'TextBlock',
      text: 'size:default',
      size: 'default',
    },
    {
      type: 'TextBlock',
      text: 'size:medium',
      size: 'medium',
    },
    {
      type: 'TextBlock',
      text: 'size:large',
      size: 'large',
    },
    {
      type: 'TextBlock',
      text: 'size:extraLarge',
      size: 'extraLarge',
    },
    {
      type: 'TextBlock',
      text: 'weight: lighter',
      weight: 'lighter',
    },
    {
      type: 'TextBlock',
      text: 'weight: default',
      weight: 'default',
    },
    {
      type: 'TextBlock',
      text: 'weight: bolder',
      weight: 'bolder',
    },
    {
      type: 'TextBlock',
      text: '**wrap: false** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      wrap: false,
    },
    {
      type: 'TextBlock',
      text: '**wrap: true** Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      wrap: true,
    },
    {
      type: 'TextBlock',
      text: 'Style set to heading',
      style: 'heading',
      wrap: true,
    },
    {
      type: 'TextBlock',
      text: 'Style set to heading, color set to good',
      style: 'heading',
      color: 'good',
      wrap: true,
    },
    {
      type: 'TextBlock',
      text: 'Style set to default',
      style: 'default',
      wrap: true,
    },
    {
      type: 'TextBlock',
      text: 'Style unset',
      wrap: true,
    },
  ],
};

const exampleColumn = {
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
  type: 'AdaptiveCard',
  version: '1.0',
  body: [
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 1',
            },
            {
              type: 'Image',
              url: 'https://adaptivecards.io/content/cats/1.png',
            },
          ],
        },
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 2',
            },
            {
              type: 'Image',
              url: 'https://adaptivecards.io/content/cats/1.png',
            },
          ],
        },
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 3',
            },
            {
              type: 'Image',
              url: 'https://adaptivecards.io/content/cats/1.png',
            },
          ],
        },
      ],
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          minHeight: '50px',
          backgroundImage: 'https://adaptivecards.io/content/AlkiBeach.jpg',
          width: 'auto',
        },
        {
          type: 'Column',
          minHeight: '50px',
          backgroundImage: {
            url: 'https://adaptivecards.io/content/GoldenGardensPark.jpg',
            verticalAlignment: 'Center',
          },
          width: 'stretch',
        },
        {
          type: 'Column',
          minHeight: '50px',
          backgroundImage: 'https://adaptivecards.io/content/BainbridgeIsland.jpg',
          width: 'auto',
        },
      ],
    },
    {
      type: 'TextBlock',
      text: 'You can even repeat the background image...',
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          minHeight: '50px',
          backgroundImage: {
            url: 'https://adaptivecards.io/content/uparrow.png',
            fillMode: 'Repeat',
          },
          width: 'stretch',
        },
        {
          type: 'Column',
          horizontalAlignment: 'Center',
          verticalContentAlignment: 'Center',
          items: [
            {
              type: 'TextBlock',
              horizontalAlignment: 'Center',
              text: 'Those are some neat arrows',
              wrap: true,
            },
          ],
          width: 'stretch',
        },
      ],
    },
    {
      type: 'TextBlock',
      text: 'Horizontal repeat...',
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          minHeight: '50px',
          backgroundImage: {
            url: 'https://adaptivecards.io/content/downarrow.png',
            fillMode: 'RepeatHorizontally',
          },
          width: 'stretch',
        },
        {
          type: 'Column',
          minHeight: '50px',
          backgroundImage: {
            url: 'https://adaptivecards.io/content/uparrow.png',
            fillMode: 'RepeatHorizontally',
            verticalAlignment: 'Center',
          },
          width: 'stretch',
        },
        {
          type: 'Column',
          minHeight: '50px',
          backgroundImage: {
            url: 'https://adaptivecards.io/content/uparrow.png',
            fillMode: 'RepeatHorizontally',
            verticalAlignment: 'Bottom',
          },
          width: 'stretch',
        },
      ],
    },
    {
      type: 'TextBlock',
      text: 'Vertical repeat...',
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          minHeight: '50px',
          backgroundImage: {
            url: 'https://adaptivecards.io/content/uparrow.png',
            fillMode: 'RepeatVertically',
          },
          width: 'stretch',
        },
        {
          type: 'Column',
          minHeight: '50px',
          backgroundImage: {
            url: 'https://adaptivecards.io/content/downarrow.png',
            fillMode: 'RepeatVertically',
            horizontalAlignment: 'Center',
          },
          width: 'stretch',
        },
        {
          type: 'Column',
          minHeight: '50px',
          backgroundImage: {
            url: 'https://adaptivecards.io/content/uparrow.png',
            fillMode: 'RepeatVertically',
            horizontalAlignment: 'Right',
          },
          width: 'stretch',
        },
      ],
    },
    {
      type: 'TextBlock',
      text: 'Bleed left',
    },
    {
      type: 'ColumnSet',
      style: 'emphasis',
      columns: [
        {
          type: 'Column',
          style: 'good',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 1',
            },
          ],
          bleed: true,
          width: 'stretch',
        },
        {
          type: 'Column',
          style: 'attention',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 2',
            },
          ],
          width: 'stretch',
        },
        {
          type: 'Column',
          style: 'warning',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 3',
            },
          ],
          width: 'stretch',
        },
      ],
    },
    {
      type: 'TextBlock',
      text: 'Bleed center',
    },
    {
      type: 'ColumnSet',
      style: 'emphasis',
      columns: [
        {
          type: 'Column',
          style: 'good',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 1',
            },
          ],
          width: 'stretch',
        },
        {
          type: 'Column',
          style: 'attention',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 2',
            },
          ],
          bleed: true,
          width: 'stretch',
        },
        {
          type: 'Column',
          style: 'warning',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 3',
            },
          ],
          width: 'stretch',
        },
      ],
    },
    {
      type: 'TextBlock',
      text: 'Bleed right',
    },
    {
      type: 'ColumnSet',
      style: 'emphasis',
      columns: [
        {
          type: 'Column',
          style: 'good',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 1',
            },
          ],
          width: 'stretch',
        },
        {
          type: 'Column',
          style: 'attention',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 2',
            },
          ],
          width: 'stretch',
        },
        {
          type: 'Column',
          style: 'warning',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 3',
            },
          ],
          bleed: true,
          width: 'stretch',
        },
      ],
    },
    {
      type: 'TextBlock',
      text: 'Bleed all',
    },
    {
      type: 'ColumnSet',
      style: 'emphasis',
      columns: [
        {
          type: 'Column',
          style: 'good',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 1',
            },
          ],
          bleed: true,
          width: 'stretch',
        },
        {
          type: 'Column',
          style: 'attention',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 2',
            },
          ],
          bleed: true,
          width: 'stretch',
        },
        {
          type: 'Column',
          style: 'warning',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 3',
            },
          ],
          bleed: true,
          width: 'stretch',
        },
      ],
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          items: [
            {
              type: 'Graph',
            },
          ],
          fallback: {
            type: 'Column',
            items: [
              {
                type: 'TextBlock',
                text: 'Fallback',
              },
            ],
          },
          width: 'auto',
        },
        {
          type: 'Column',
          items: [
            {
              type: 'Graph',
            },
          ],
          fallback: 'drop',
        },
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: 'This is a column',
              wrap: true,
            },
          ],
        },
      ],
    },
    {
      type: 'ColumnSet',
      style: 'emphasis',
      minHeight: '100px',
      columns: [
        {
          type: 'Column',
          style: 'default',
          minHeight: '200px',
          items: [
            {
              type: 'TextBlock',
              wrap: true,
              text: 'The columnset has a minHeight of 100px while this column has a minHeight of 200px so it should override',
            },
          ],
        },
        {
          type: 'Column',
          style: 'default',
          minHeight: '50px',
          items: [
            {
              type: 'FactSet',
              facts: [
                {
                  title: 'ColumnSet',
                  value: 'MinHeight: 100px',
                },
                {
                  title: 'Column 1',
                  value: 'MinHeight: 200px',
                },
                {
                  title: 'Column 2',
                  value: 'MinHeight: 50px',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'TextBlock',
      text: 'The middle column is set to rtl',
      wrap: true,
      size: 'Medium',
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: 'Column One',
              wrap: true,
            },
          ],
        },
        {
          type: 'Column',
          rtl: true,
          items: [
            {
              type: 'TextBlock',
              text: 'العمود الثاني',
              wrap: true,
            },
          ],
        },
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              wrap: true,
              text: 'Column three',
            },
          ],
        },
      ],
      spacing: 'Medium',
    },
    {
      type: 'Container',
      items: [
        {
          type: 'ColumnSet',
          columns: [
            {
              type: 'Column',
              width: 'auto',
              items: [
                {
                  type: 'Image',
                  url: 'https://adaptivecards.io/content/cats/3.png',
                  size: 'medium',
                },
                {
                  type: 'TextBlock',
                  text: 'SHADES',
                  horizontalAlignment: 'center',
                  weight: 'bolder',
                },
              ],
            },
            {
              type: 'Column',
              width: 'stretch',
              separator: true,
              spacing: 'medium',
              items: [
                {
                  type: 'TextBlock',
                  text: 'Dec 4',
                  horizontalAlignment: 'center',
                },
                {
                  type: 'TextBlock',
                  text: 'Final',
                  spacing: 'none',
                  horizontalAlignment: 'center',
                },
                {
                  type: 'TextBlock',
                  text: '7 - 40',
                  size: 'extraLarge',
                  horizontalAlignment: 'center',
                },
              ],
            },
            {
              type: 'Column',
              width: 'auto',
              separator: true,
              spacing: 'medium',
              items: [
                {
                  type: 'Image',
                  url: 'https://adaptivecards.io/content/cats/2.png',
                  size: 'medium',
                  horizontalAlignment: 'center',
                },
                {
                  type: 'TextBlock',
                  text: 'SKINS',
                  horizontalAlignment: 'center',
                  weight: 'bolder',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'TextBlock',
      text: 'Try clicking a column!',
      weight: 'bolder',
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 1',
            },
            {
              type: 'Image',
              url: 'https://adaptivecards.io/content/cats/1.png',
            },
          ],
          selectAction: {
            type: 'Action.OpenUrl',
            tooltip: 'cool link',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
        },
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 2',
            },
            {
              type: 'Image',
              url: 'https://adaptivecards.io/content/cats/1.png',
            },
          ],
          selectAction: {
            type: 'Action.OpenUrl',
            tooltip: 'cool link',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
        },
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 3',
            },
            {
              type: 'Image',
              url: 'https://adaptivecards.io/content/cats/1.png',
            },
          ],
          selectAction: {
            type: 'Action.OpenUrl',
            tooltip: 'cool link',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          },
        },
      ],
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          items: [
            {
              type: 'TextBlock',
              text: 'No Style',
            },
          ],
        },
        {
          type: 'Column',
          style: 'default',
          items: [
            {
              type: 'TextBlock',
              text: 'Default Style',
            },
          ],
        },
        {
          type: 'Column',
          style: 'emphasis',
          items: [
            {
              type: 'TextBlock',
              text: 'Emphasis Style',
            },
            {
              type: 'Container',
              items: [
                {
                  type: 'TextBlock',
                  text: 'Container no style',
                },
              ],
            },
            {
              type: 'Container',
              style: 'default',
              items: [
                {
                  type: 'TextBlock',
                  text: 'Container default style',
                },
              ],
            },
            {
              type: 'Container',
              style: 'emphasis',
              items: [
                {
                  type: 'TextBlock',
                  text: 'Container emphasis style',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'TextBlock',
      text: 'Hi,',
    },
    {
      type: 'TextBlock',
      text: 'MasterHip',
      isSubtle: true,
    },
    {
      type: 'ColumnSet',
      height: 'stretch',
      columns: [
        {
          type: 'Column',
          verticalContentAlignment: 'bottom',
          items: [
            {
              type: 'TextBlock',
              text: 'Column 1',
            },
          ],
        },
      ],
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          width: 'auto',
          items: [
            {
              type: 'TextBlock',
              text: '(auto)',
            },
            {
              type: 'Image',
              url: 'https://adaptivecards.io/content/adaptive-card-50.png',
            },
          ],
        },
        {
          type: 'Column',
          width: 'stretch',
          items: [
            {
              type: 'TextBlock',
              horizontalAlignment: 'center',
              text: '(stretch)',
            },
            {
              type: 'Image',
              horizontalAlignment: 'center',
              url: 'https://adaptivecards.io/content/adaptive-card-50.png',
            },
          ],
        },
        {
          type: 'Column',
          width: 'auto',
          items: [
            {
              type: 'TextBlock',
              text: '(auto)',
            },
            {
              type: 'Image',
              url: 'https://adaptivecards.io/content/adaptive-card-50.png',
            },
          ],
        },
      ],
    },
  ],
};

const exampleContainer = {
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
  type: 'AdaptiveCard',
  version: '1.2',
  body: [
    {
      type: 'Container',
      items: [
        {
          type: 'TextBlock',
          text: 'This is some text',
        },
        {
          type: 'Image',
          url: 'https://adaptivecards.io/content/cats/1.png',
          size: 'large',
        },
      ],
      minHeight: '15rem',
    },
    {
      type: 'Container',
      style: 'default',
      items: [
        {
          type: 'TextBlock',
          text: 'This container has the default style',
        },
        {
          type: 'TextBlock',
          text: 'color: default',
          color: 'default',
        },
        {
          type: 'TextBlock',
          text: 'color: accent',
          color: 'accent',
        },
        {
          type: 'TextBlock',
          text: 'color: good',
          color: 'good',
        },
        {
          type: 'TextBlock',
          text: 'color: warning',
          color: 'warning',
        },
        {
          type: 'TextBlock',
          text: 'color: attention',
          color: 'attention',
        },
        {
          type: 'TextBlock',
          text: 'color: light',
          color: 'light',
        },
        {
          type: 'TextBlock',
          text: 'color: dark',
          color: 'dark',
        },
      ],
    },
    {
      type: 'Container',
      style: 'accent',
      items: [
        {
          type: 'TextBlock',
          text: 'This container has the accent style',
        },
        {
          type: 'TextBlock',
          text: 'color: default',
          color: 'default',
        },
        {
          type: 'TextBlock',
          text: 'color: accent',
          color: 'accent',
        },
        {
          type: 'TextBlock',
          text: 'color: good',
          color: 'good',
        },
        {
          type: 'TextBlock',
          text: 'color: warning',
          color: 'warning',
        },
        {
          type: 'TextBlock',
          text: 'color: attention',
          color: 'attention',
        },
        {
          type: 'TextBlock',
          text: 'color: light',
          color: 'light',
        },
        {
          type: 'TextBlock',
          text: 'color: dark',
          color: 'dark',
        },
        {
          type: 'Container',
          items: [
            {
              type: 'TextBlock',
              text: 'Contained container - no style',
              color: 'dark',
            },
          ],
        },
        {
          type: 'Container',
          style: 'emphasis',
          items: [
            {
              type: 'TextBlock',
              text: 'Contained container - emphasis',
              color: 'dark',
            },
          ],
        },
        {
          type: 'Container',
          style: 'default',
          items: [
            {
              type: 'TextBlock',
              text: 'Contained container - default',
              color: 'dark',
            },
          ],
        },
        {
          type: 'Container',
          style: 'good',
          items: [
            {
              type: 'TextBlock',
              text: 'Contained container - good',
              color: 'dark',
            },
          ],
        },
        {
          type: 'Container',
          style: 'warning',
          items: [
            {
              type: 'TextBlock',
              text: 'Contained container - warning',
              color: 'dark',
            },
          ],
        },
        {
          type: 'Container',
          style: 'attention',
          items: [
            {
              type: 'TextBlock',
              text: 'Contained container - attention',
              color: 'dark',
            },
          ],
        },
        {
          type: 'Container',
          style: 'accent',
          items: [
            {
              type: 'TextBlock',
              text: 'Contained container - accent',
              color: 'dark',
            },
          ],
        },
      ],
    },
  ],
};

const exampleImageSet = {
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
  type: 'AdaptiveCard',
  version: '1.2',
  body: [
    {
      type: 'ImageSet',
      imageSize: 'medium',
      images: [
        {
          type: 'Image',
          url: 'https://adaptivecards.io/content/cats/1.png',
          size: 'large',
          backgroundColor: 'red',
          style: 'person',
        },
        {
          type: 'Image',
          url: 'https://adaptivecards.io/content/cats/3.png',
        },
        {
          type: 'Image',
          url: 'https://adaptivecards.io/content/cats/1.png',
          size: 'small',
        },
        {
          type: 'Image',
          url: 'https://adaptivecards.io/content/cats/1.png',
          backgroundColor: '#cdcdcd',
          width: '60px',
          height: '60px',
        },
        {
          type: 'Image',
          url: 'https://adaptivecards.io/content/cats/2.png',
        },
      ],
    },
  ],
};

const exampleImage = {
  $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
  type: 'AdaptiveCard',
  version: '1.2',
  body: [
    {
      type: 'Image',
      url: 'https://adaptivecards.io/content/cats/1.png',
      backgroundColor: 'blue',
      size: 'medium',
      style: 'person',
    },
    {
      type: 'Image',
      url: 'https://adaptivecards.io/content/cats/1.png',
      width: '60px',
      height: '60px',
      size: 'small',
    },
    {
      type: 'Image',
      backgroundColor: '#cdcdcd',
      url: 'https://adaptivecards.io/content/cats/2.png',
      size: 'large',
    },
    {
      type: 'Image',
      url: 'https://adaptivecards.io/content/cats/3.png',
    },
  ],
};

const exampleColumnSet = {
  type: 'AdaptiveCard',
  version: '1.0',
  body: [
    {
      type: 'TextBlock',
      text: 'Pick up where you left off?',
      weight: 'bolder',
    },
    {
      type: 'ColumnSet',
      spacing: 'medium',
      columns: [
        {
          type: 'Column',
          width: 'auto',
          items: [
            {
              type: 'Image',
              url: 'https://unsplash.it/80?image=1083',
              size: 'medium',
            },
          ],
        },
        {
          type: 'Column',
          width: 4,
          items: [
            {
              type: 'TextBlock',
              text: 'Silver Star Mountain',
            },
            {
              type: 'TextBlock',
              text: 'Maps',
              isSubtle: true,
              spacing: 'none',
            },
          ],
        },
      ],
      selectAction: {
        type: 'Action.OpenUrl',
        url: 'https://www.msn.com',
        tooltip: 'View a map of Silver Star Mountain',
      },
    },
    {
      type: 'ColumnSet',
      columns: [
        {
          type: 'Column',
          width: 'auto',
          items: [
            {
              type: 'Image',
              url: 'https://unsplash.it/80?image=1082',
              size: 'medium',
            },
          ],
        },
        {
          type: 'Column',
          width: 4,
          style: 'emphasis',
          items: [
            {
              type: 'TextBlock',
              text: 'Kitchen Remodel',
            },
            {
              type: 'TextBlock',
              text: 'With EMPHASIS',
              isSubtle: true,
              spacing: 'none',
            },
          ],
        },
      ],
      selectAction: {
        type: 'Action.OpenUrl',
        url: 'https://www.AdaptiveCards.io',
        tooltip: 'Remodel your kitchen with our new cabinet styles!',
      },
    },
    {
      type: 'ColumnSet',
      bleed: false,
      columns: [
        {
          type: 'Column',
          width: 'auto',
          items: [
            {
              type: 'Image',
              url: 'https://unsplash.it/80?image=1080',
              size: 'medium',
            },
          ],
        },
        {
          type: 'Column',
          width: 4,
          items: [
            {
              type: 'TextBlock',
              text: 'The Witcher',
            },
            {
              type: 'TextBlock',
              text: 'Netflix',
              isSubtle: true,
              spacing: 'none',
            },
          ],
        },
      ],
      selectAction: {
        type: 'Action.OpenUrl',
        url: 'https://www.outlook.com',
        tooltip: 'Watch the newest episode today!',
      },
    },
  ],
  actions: [
    {
      type: 'Action.OpenUrl',
      title: 'Resume all',
      url: 'ms-cortana:resume-all',
    },
    {
      type: 'Action.OpenUrl',
      title: 'More activities',
      url: 'ms-cortana:more-activities',
    },
  ],
};

export const Card = Template.bind({});
Card.args = {
  data: exampleAdaptiveCard,
};

export const TextBlock = Template.bind({});
TextBlock.args = {
  data: exampleTextBlock,
};

export const Column = Template.bind({});
Column.args = {
  data: exampleColumn,
};

export const Container = Template.bind({});
Container.args = {
  data: exampleContainer,
};

export const ImageSet = Template.bind({});
ImageSet.args = {
  data: exampleImageSet,
};

export const Image = Template.bind({});
Image.args = {
  data: exampleImage,
};

export const ColumnSet = Template.bind({});
ColumnSet.args = {
  data: exampleColumnSet,
};
