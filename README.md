# WORDLE
<p>Game WORDLE using JS</p>
<p>GitHub Pages <a href='https://demisheva.github.io/WORDLE/'>demisheva.github.io/WORDLE/</a><p>

<h1>Task</h1>
<p>In this task, you have to implement Wordle game. You can find a video demo in task folder. This is how it should work:
    <ul>
        <li>When user opens page, table (6 rows, 5 columns) and two buttons (Reset and Check) should be displayed and game should start.</li>
        <li>At the beginning of each game a random word is selected from the dictionary. (dictionary.js). </li>
        <li>Each game round user enters a word of five letters, one letter per cell and click ‘Check’.</li>
        <li>If the entered word is not in the dictionary, you need to show an alert. In this case, the round does not end and user can try to guess again.</li>
        <li>In case entered word is present in dictionary, but not correct, each table cell should change it’s color: if letter is present in the word and in the correct spot, it should be marked with green color; if letter is present in the word but in another spot, it should be marked with yellow color, and in case letter is not in the word, it should be marked with gray color.</li>
        <li>If entered word was not correct and it was not the last row, the next game round should start. </li>
        <li>If entered word is not correct, and it was the last row, alert (‘Game over.’) should be shown.</li>
        <li>If entered word is correct, alert (‘Congratulations! You won.’) should be shown.</li>
        <li>When user clicks ‘Reset’ button, all user input should be cleared, new word should be chosen from dictionary and new game should start.</li>
    </ul>
</p>
