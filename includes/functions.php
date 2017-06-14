<?php
function outputAcronyms(){
    $acronyms = array(
        'PHP',
        'HTML',
        'CSS',
        'SASS',
        'CMS',
        'SEO',
        'AJAX',
        'JSX',
        'DNS',
        'MVC',
        'JSON',
        'LESS',
        'LAMP',
        'REST',
        'CDN',
        'OOP',
        'URL',
        'CURL',
        'BEM',
        'WYSIWYG',
        'SOAP',
        'AGILE',
        'GUI',
        'SQL',
        'SSH',
        'WWW',
        'API',
        'CLI',
        'WIP',
        'XML',
        'HTTP',
        'PSD',
        'EDM',
        'MAMP'
    );
    foreach($acronyms as $k=>$v){
        echo '<span class="a'.$k.'">'.$v.' </span>';
    }
}
?>
