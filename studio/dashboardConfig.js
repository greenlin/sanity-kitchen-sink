export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec01114496fb57ff11e1dee',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wyd5wtft',
                  apiId: 'fbc91be7-c040-4544-a1fc-d1e99282f719'
                },
                {
                  buildHookId: '5ec011142723aa3aaaa5e933',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-we6qy625',
                  apiId: 'aac87954-09f0-4db4-bde5-7702bb444d66'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/greenlin/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-we6qy625.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
