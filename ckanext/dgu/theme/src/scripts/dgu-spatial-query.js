
$(function() {
    //var spatialModule = window.ckan.module.instances['spatial-query']

    window.ckan.DGU.SearchModule.onReady(function(module) {
        $("[data-bbox]").each(function( idx, el ) {
            var id = $(el).attr('data-id')
            module.map.addResultGeom(id, $(el).attr('data-bbox'), $(el).attr('data-title'))
            $(el).hover(
                function() {module.map.highlightResult(id)},
                function() {module.map.highlightResult()}
            )
        })
    })
})