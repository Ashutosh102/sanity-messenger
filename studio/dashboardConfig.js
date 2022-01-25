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
                  buildHookId: '61f01be609e1d5442face306',
                  title: 'Sanity Studio',
                  name: 'sanity-messenger-studio',
                  apiId: '6c191a35-a1b8-48a9-87ae-037303e999e9'
                },
                {
                  buildHookId: '61f01be712e4914c7229e38b',
                  title: 'Blog Website',
                  name: 'sanity-messenger',
                  apiId: 'a6173a73-7970-47f5-9a96-ffdd20fd39d4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ashutosh102/sanity-messenger',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-messenger.netlify.app', category: 'apps'}
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
