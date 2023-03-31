let cpfUsuario = "12312312312"

/*Isso acontece porque var, if e const são palavras reservadas do JavaScript. 
Ou seja, não podemos usá-las para dar nomes (identificar) variáveis, 
funções ou outros blocos de código que precisem de identificadores.
*/

let var = 0;
let if = 0;
let const = "Alura";

/*No JavaScript, algumas palavras são totalmente reservadas 
(não podem ser utilizadas como identificador em nenhum caso), enquanto outras 
podem ser utilizadas dependendo do contexto, e ainda outras não podem ser 
consideradas totalmente reservadas por razões de compatibilidade com versões
mais antigas da linguagem, como é o caso de let (lembrando que, até o ES6, só 
era possível declarar variáveis com var). A palavra let vem do verbo em inglês 
“permitir”, então não é possível deixá-la reservada pois pode já estar sendo
usada como identificador em algum código mais antigo.*/
let varInicial = 0;
let ifFalse = 0;
let constDeTexto = "Alura";

/*A melhor prática, nesse caso, é não utilizar nenhum dos termos da lista abaixo 
como identificadores, seja de variáveis, funções, classes ou qualquer outro 
bloco que precise de um nome. As únicas exceções são from, set e target, que 
são seguras e comumente utilizadas.*/
arguments
as
async
await
break
case
catch
class
const
continue
debugger
default
delete
do
else
eval
export
extends
false
finally
for
from
function
get
if
import
in
instanceof
let
of
new
null
return
set
static
super
switch
target
this
throw
true
try
typeof
var
void
while
with
yield

/*Como as linguagens estão em constante desenvolvimento, o JavaScript também 
restringe o uso de mais algumas palavras que podem ser utilizadas nas próximas 
versões:*/
enum
implements
interface
package
private
protected
public