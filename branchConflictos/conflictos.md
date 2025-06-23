Creando y gestionando conflictos

El conflicto se genera cuando dos hacen un cambio en la misma linea al mismo tiempo.

cuando hago el push no me deja pushear porque no me traje los cambios (git push origin rama)

entonces hago git pull --rebase origin rama
si hubo un conflicto me va a fallar y pedir que lo arregle manualmente.

'''CONFLICT (content): Merge conflict in branchConflictos/calculadora.js
error: could not apply 5134f82... rompiendo
hint: Resolve all conflicts manually, mark them as resolved with
hint: "git add/rm <conflicted_files>", then run "git rebase --continue".
hint: You can instead skip this commit: run "git rebase --skip".
hint: To abort and get back to the state before "git rebase", run "git rebase --abort".
Could not apply 5134f82... rompiendo'''

Entonces con git status veo que archivo tiene conflictos, y abriendo el archivo veo la linea de los conflictos

cuando arreglo el conflicto hago git add archivo

y hago git rebase --continue para seguir 

Despues de esto deberia poder hacer el git push origin rama.