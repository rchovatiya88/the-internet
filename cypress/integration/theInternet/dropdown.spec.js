describe('Dropdown example.', () => {

    const baseURL = 'http://the-internet.herokuapp.com/'
    
    before(() => {
        cy.visit(baseURL);
    });

    it('Select Option1 ', () => {
        cy.visit(baseURL + 'dropdown'); 
        cy.get('#dropdown').then(($select) => {
            const opt = $select.find('option[value="1"]');
            $select.val(opt.attr('value'));
            return $select;
        });    
    });

    it('Select Option 2 ', () => {
        cy.get('#dropdown').then(($select) => {
            const opt = $select.find('option[value="2"]');
            $select.val(opt.attr('value'));
            return $select;
        });    
    });
});
