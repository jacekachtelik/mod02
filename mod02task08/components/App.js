/**
 * 
 */
App = React.createClass({
	getInitialState() {
		return {
			loading: false,
			searchingText: '',
			gif: {}
		};
	},
    render: function() {
        var styles = {
            margin: '0 auto',
            textAlign: center,
            width: '90%'
        };
        
        return(
        		<div style = {styles}>
        			<h1>Wyszukiwarka GIFów!</h1>
        			<p>Znajdź gifa na <a href='http://giphy.com'>Giphy</a>. Naciskaj ENTER, aby pobrać kolejne gify.</p>
        			<Search onSearch={this.handleSearch} />
        			<Gif loading={this.state.loading} url={this.state.gif.url} sourceUrl={this.state.gif.sourceUrl} />
        		</div>
        );
    }
});