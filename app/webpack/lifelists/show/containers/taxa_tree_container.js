import { connect } from "react-redux";
import TaxaTree from "../components/taxa_tree";
import {
  toggleTaxon,
  setDetailsTaxon,
  setDetailsView,
  setTreeScrollIndex,
  setListViewOpenTaxon
} from "../reducers/lifelist";

function mapStateToProps( state ) {
  return {
    config: state.config,
    lifelist: state.lifelist
  };
}

function mapDispatchToProps( dispatch ) {
  return {
    toggleTaxon: ( taxon, options ) => dispatch( toggleTaxon( taxon, options ) ),
    setDetailsTaxon: ( taxon, options ) => dispatch( setDetailsTaxon( taxon, options ) ),
    setDetailsView: view => dispatch( setDetailsView( view ) ),
    setTreeScrollIndex: scrollIndex => dispatch( setTreeScrollIndex( scrollIndex ) ),
    setListViewOpenTaxon: taxon => dispatch( setListViewOpenTaxon( taxon ) )
  };
}

const TaxaTreeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( TaxaTree );

export default TaxaTreeContainer;
