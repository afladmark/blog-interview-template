const fetch = async () => {
  return {
    json: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return {
        blogPosts: [
          {
            title: 'How to ask for a letter of introduction for a job',
            description:
              'It is important to make a good impression when asking for an introduction for a job.',
            createdAt: '2019-04-28T22:52:48.436Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/2xvaRye4g85Ez9ZUfmSS0A/d71c00049d06fbca626fa9532480e248/chris-liverani-9cd8qOgeNIY-unsplash-compressed.jpg',
          },
          {
            title:
              '6 Easy Ways You Can Improve Your Resume in 10 Minutes or Less ',
            description:
              "It's natural to feel stuck in your job search when interview requests have slowed down to a trickle or stopped completely. Here's how to improve your resume in 6 simple steps.",
            createdAt: '2019-04-28T22:58:44.661Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/2dLe6CpXJlGKiIKjw5bOrb/3e0de58040e797c1b7341136200610f3/icons8-team-dhZtNlvNE8M-unsplash-compressed.jpg',
          },
          {
            title: 'How to Write CV References (with Examples and Layout Tips)',
            description: 'A complete guide to CV references',
            createdAt: '2020-08-18T17:34:50.640Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/6h4WnJPipL90qVivJoEYq8/69525428a9a64fed01b716e122fcdaa9/pexels-anna-shvets-3727464.jpg',
          },
          {
            title: 'How to list achievements on your resume (with examples)',
            description:
              'A great resume lists your achievements, not your responsibilities. ',
            createdAt: '2020-01-03T23:33:24.303Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/4AxSQn81R25mkTJ4dttuhH/9e4b420b4f35a18794d7363c8511fa72/back-of-head.png',
          },
          {
            title: 'What to include in a CV - an international guide',
            description:
              'A guide to what personal information to include in your CV, no matter where you are applying for a job.',
            createdAt: '2020-06-15T19:01:39.630Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/1nkxOzs5gdcEiOdabJcL8r/8190b2f049ea21646ae8b095c55ed319/person-with-toy-airplane-on-world-map-3769138__1_.jpg',
          },
          {
            title: "Introducing 'PDF only' VisualCVs",
            description: 'A new privacy option for your VisualCV.',
            createdAt: '2019-04-29T00:40:26.736Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/3G49uSOwO5ZpNWo21nt3b8/aa134e120d7b081bc0702601d62b3b16/tianyi-ma-WiONHd_zYI4-unsplash-compressed.jpg',
          },
          {
            title: 'How To Write a Perfect Resume: A Resume Writing Checklist',
            description:
              "A perfect resume isn't missing any of these important pieces. Use this checklist to make sure your resume has everything it needs.",
            createdAt: '2019-10-03T18:26:32.418Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/4TqcYkADGzUMONAinmek50/7b41ceffafda686d2994ce08089be526/depth-of-field-desk-essay-210661.jpg',
          },
          {
            title:
              'Strut Your Stuff: How to write the perfect summary of qualifications for your resume',
            description:
              'A qualification summary is a great way to display some professional highlights on your resume.',
            createdAt: '2020-08-12T22:04:41.841Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/1uH0sC52jNrRG4qgfbsivv/95cc17ba1cb9b9c57019419c090e59cd/notes-laptop.jpg',
          },
          {
            title:
              'How to Get a Better Job - The Ultimate Guide to Get your Dream Job',
            description:
              'A systematic approach to getting everything you want in your career',
            createdAt: '2020-07-03T17:09:26.262Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/4v3roTaMfbnxUlCDwmGG8u/ecdea7dee4ffec299e1222d3ccd734e6/How_to_get_a_better_job.jpg',
          },
          {
            title: 'How to Write A Job Acceptance Letter',
            description:
              "Accepting a job offer is exciting, but don't let your excitement get the better of you. A polite and respectful acceptance is an important part of starting your job off on the right foot.",
            createdAt: '2019-10-25T21:35:52.212Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/67XHS8Ln1zJkUIawPJR5Lg/e0d3719b459d05c678f1a19e73c890b8/handshake.jpg',
          },
          {
            title:
              'Adaptive Skills: What are they, and how can I showcase them on my resume?',
            description:
              'Adaptability in the workplace is an important part of a successful career.',
            createdAt: '2020-07-30T22:00:50.261Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/7JADFfEnIwfzNKOUKtEIa4/1896631fd49d25d5bcfc84821a6d7b9b/overhead-shot-of-coffee-spreadsheets.jpg',
          },
          {
            title: 'The Ultimate Guide to CV Writing ',
            description:
              'All job hunts start with a great CV. With this ultimate guide to CV writing your CV will be ready for the job search in no time.',
            createdAt: '2020-09-18T16:22:20.806Z',
            image:
              'https://images.ctfassets.net/zqmhp5i8t0xx/5KMJ7HkHyszAXndEisS4jd/86731d8427d6de9b8ab3561231d3bea1/taking-notes-at-a-computer.jpg',
          },
        ],
      }
    },
  }
}

export default fetch
