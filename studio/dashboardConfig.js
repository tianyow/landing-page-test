export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '61c139d694e5d7acf9763727',
                  title: 'Sanity Studio',
                  name: 'landing-page-test-studio-tjucm5qo',
                  apiId: 'bbc1b702-b0dc-4689-af4d-57c3f8e35846'
                },
                {
                  buildHookId: '61c139d6cc864eb63b876a6b',
                  title: 'Landing pages Website',
                  name: 'landing-page-test-web-vbkqua1f',
                  apiId: 'ebc5c907-8800-48be-b4cf-8fe3368f8a67'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tianyow/landing-page-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://landing-page-test-web-vbkqua1f.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
