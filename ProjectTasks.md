// Zadanie: gotowy frontend
Do wykonania są następujące widoki:

`MainLayout`: [DONE]
główny układ strony,

`Header`: [DONE]
dla niezalogowanych – link do logowania za pomocą Auth0,[VIEW-DONE]
dla zalogowanych – link do listy własnych ogłoszeń oraz link do wylogowania,[DONE]

`Homepage`: [DONE]
    dla zalogowanych – link do dodawania nowego ogłoszenia,[DONE]
    lista ogłoszeń, zawierająca co najmniej tytuły ogłoszeń,[DONE]

`Post`:
podstrona pojedynczego ogłoszenia, zawierająca wszystkie informacje,
dla zalogowanego użytkownika, jeśli jest autorem tego ogłoszenia lub administratorem – link do edycji ogłoszenia,

`PostEdit`:
dla zalogowanego użytkownika, jeśli jest autorem tego ogłoszenia lub administratorem – widok umożliwiający edycję ogłoszenia, [DONE]

`PostAdd`:
    [View-done]
    dla zalogowanego użytkownika – możliwość dodawania nowego ogłoszenia,

`NotFound`:
informacja o nieznalezieniu strony i link do strony głównej.


`Uwagi`
Jeśli odwiedzający stronę spróbuje wejść na stronę z ograniczonym dostępem, powinien zobaczyć zawartość widoku NotFound,
np. niezalogowany próbujący dodać ogłoszenie,
np. zalogowany próbujący edytować nie swoje ogłoszenie.
Informacje na temat użytkownika (czy jest zalogowany i jaki jest jego adres email) będą docelowo dostarczane przez backend,
na etapie prac nad frontendem mogą to być informacje wpisane na stałe w initialState.js,
opcjonalnie, dla ułatwienia testów, możesz w nagłówku strony dodać <select> służący do przełączania się pomiędzy użytkownikiem niezalogowanym, użytkownikami zalogowanymi, oraz administratorem.

<Link> do logowania za pośrednictwem Auth0 może na razie prowadzić do https://google.com,
docelowo będzie prowadził pod adres obsługiwany przez nasz backend.