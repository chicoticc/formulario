const selectRol = document.getElementById('rol');
        const RolSeleccionado = document.getElementById('rolSeleccionado');
        selectRol.addEventListener('change', () => {
            const rol = selectRol.options[selectRol.selectedIndex].text;
            RolSeleccionado.textContent = `Rol seleccionado: ${rol}`;
        });
    