package FINAL.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import FINAL.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: СогласиеНаОпд
 */
@Entity(name = "IISFINALСогласиеНаОпд")
@Table(schema = "public", name = "СогласиеНаОпд")
public class SoglasieNaOpd {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Дата")
    private Date дата;

    @Column(name = "Подпись")
    private Boolean подпись;

    @Column(name = "Отправлено")
    private Boolean отправлено;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudniki")
    @Convert("Sotrudniki")
    @Column(name = "Сотрудники", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudniki", insertable = false, updatable = false)
    private Sotrudniki sotrudniki;


    public SoglasieNaOpd() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public Date getДата() {
      return дата;
    }

    public void setДата(Date дата) {
      this.дата = дата;
    }

    public Boolean getПодпись() {
      return подпись;
    }

    public void setПодпись(Boolean подпись) {
      this.подпись = подпись;
    }

    public Boolean getОтправлено() {
      return отправлено;
    }

    public void setОтправлено(Boolean отправлено) {
      this.отправлено = отправлено;
    }


}