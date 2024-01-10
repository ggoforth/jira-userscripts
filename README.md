# JIRA Navigation Helper: Unleash The Power of Customization!

In the sprawling digital landscape, there lurks a behemoth - a giant known as JIRA. Powerful and potent, yet treacherous to navigate. Agile teams across the globe grapple with its complex mazes. The enemy? The arduous process of navigation.

But fear not, brave warrior! The dawn of a new era is upon us - an era where you command your path with the precision of a seasoned cartographer.

Introducing JIRA Navigation Helper, the shining sword forged in the code fires to vanquish your navigation woes. We arm you not only with a suite of handy keyboard shortcuts, but we also bestow upon you the power to create your own!

## Unleash Your Power and Craft Your Destiny

This isn't just about easing navigation; it's about owning it. With JIRA Navigation Helper, you become the architect of your JIRA user experience. We empower you to create personalized shortcuts, tailored to your unique workflow.

Master your journey through JIRA one keystroke at a time. Build a set of powerful scripts that obey your every command. We provide the space and tools - your imagination is the only limit.

__And the Adventure Begins...__

## Setup

1. **Clone the repository to your local machine:**
    ```
    git clone git@github.com:ggoforth/jira-userscripts.git
    ```
2. **Navigate into the project directory:**
    ```
    cd jira-userscripts
    ```
3. **Ready the 'env' file:**
    ```
    mv env.example env
    ```
4. **Prepare for the Journey - Modify the `env` file:**

   Set your configuration options and establish your personal JIRA domain:

    ```
    export BASE_URL='Your JIRA Base URL'
    export PROJECT_PREFIX='Your Project Prefix'
    export SPAMMY='true or false'
    ```

   'SPAMMY': Do you dare to trace your steps ```markdown
   ? Set to 'true' to see your keypress and execution show up in the console. Prefer a stealthier approach? Set to 'false' for silent navigation.

5. **Summon your Scripts: Run the build script:**
    ```
    bash build.sh
    ```

## Usage

From the ashes of the build script rises your talisman, the `main_output.js` file. Now, let's put this magic to work:

1. Install a userscript manager in your browser, like Tampermonkey.
2. Open your userscript manager’s dashboard, create a new script, and infuse it with the power of `main_output.js`.
3. Save and activate the script for your JIRA site.

Prepare to navigate JIRA like the digital wizard you are!

## Shape Your Spells: Custom Hotkeys

The true magic lies in customization. Refine your craft by shaping your own hotkeys in the `hotkey_execution` object in the `main.js` file. Each hotkey is a spell of action, a command bending JIRA to your will.

Breathe life into your shortcuts with another incantation, `bash build.sh`. The result? A completely tailored toolkit pulsing with your unique magic.

## Stream Deck: Your Magical Repository

For the fortunate owners of a Stream Deck, the journey becomes even more thrilling! Engrave your powerful hotkeys onto the Stream Deck's keys. One button now holds the power to navigate to any corner of JIRA.

Just remember, the Stream Deck is a spiritual twin to your keyboard. Ensure your browser window is in focus when using Stream Deck hotkeys, so JIRA hears your commands loud and clear.

Embark on your quest with JIRA Navigation Helper, your trusted companion. Banish the darkness of navigation confusion and step into the light of effortless productivity – where you wield the power over your JIRA experience!
