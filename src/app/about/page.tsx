export default function About() {
  return (

    <div
      className="max-w-md md:max-w-md lg:max-w-2xl mx-auto min-h-[calc(100vh-4rem)] md:min-h-screen flex flex-col justify-start pt-20 md:justify-center md:pt-0 space-y-3 sm:space-y-4 md:space-y-6"
        >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
        About
      </h2>

      <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-[rgb(134,134,134)]">
        <p className="leading-relaxed">
          Tolu Stevens is a software engineer, life coach and insightful content creater,
          owner of a number of different social media accounts that produce content with
          the main focus of sharing insight and clarity in a world where many have lost sight of the bigger picture.
        </p>

        <p className="leading-relaxed">
          Having traveled the world and studied various different cultures and ancient arts,
          Tolu engages in a multitude of mind-body practices and delivers core teachings through
          words in mediums that are relevant, digestible and spoken in everyday language.
        </p>

        <p className="leading-relaxed">
          His main goal is to help others help themselves where we are normally told that
          we need others. He looks to help others empower themselves, to learn to thrive and
          conquer in this world, and put people in a position where they can live lives full
          of energy and vibrancy, so that they can choose others instead of depend on them, and
          ultimately live more fulfilling lives.
        </p>
      </div>
    </div>
  )
}
